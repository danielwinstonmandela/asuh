import { chromium } from "@playwright/test";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];
page.on("pageerror", error => errors.push(error.message));

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.getByRole("heading", { name: "How will you use ASUH?" }).waitFor();
await page.getByRole("button", { name: "Older adult Voice support", exact: true }).click();
await page.getByRole("button", { name: "Finish setup" }).click();
await page.getByRole("heading", { name: "Welcome to ASUH" }).waitFor();

await page.getByRole("link", { name: "Start check-in" }).click();
await page.getByRole("heading", { name: "How are you feeling today?" }).waitFor();
await page.getByRole("button", { name: "Type instead" }).click();
await page.getByRole("textbox").fill("I feel calm today");
await page.getByRole("button", { name: "Continue" }).click();
await page.getByRole("button", { name: "Yes, continue" }).click();
for (const answer of ["I slept well", "I feel energetic", "Yes, enough", "Yes, I had company", "I feel comfortable", "No help needed"]) {
  await page.getByRole("button", { name: answer }).click();
  await page.getByRole("button", { name: "Continue" }).click();
}
await page.getByRole("heading", { name: "Thank you for checking in" }).waitFor();
await page.locator(".checkin-complete").getByRole("link", { name: "Home" }).click();

await page.getByRole("button", { name: "ID" }).click();
await page.getByRole("heading", { name: "Selamat datang di ASUH" }).waitFor();
await page.reload({ waitUntil: "networkidle" });
await page.getByRole("heading", { name: "Selamat datang di ASUH" }).waitFor();

await page.getByRole("combobox", { name: "Lihat sebagai" }).selectOption("family");
await page.getByRole("heading", { name: "Dashboard perawatan keluarga" }).waitFor();
await page.getByRole("link", { name: "Pesan pendamping" }).click();
await page.getByRole("heading", { name: "Pesan pendamping" }).waitFor();
await page.getByRole("button", { name: "Ajukan kunjungan Naya" }).click();
await page.getByRole("link", { name: "Kunjungan diajukan" }).waitFor();
await page.getByRole("link", { name: "Kunjungan diajukan" }).click();
await page.getByRole("heading", { name: "Laporan pascakunjungan" }).waitFor();

await page.goto("http://localhost:3000/health", { waitUntil: "networkidle" });
await page.getByText("ASUH tidak mendiagnosis", { exact: false }).waitFor();
await page.goto("http://localhost:3000/premium", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Lanjut" }).last().click();
await page.getByText("SOS dikirim ke lingkaran perawatan").waitFor();

if (errors.length) throw new Error(`Browser errors: ${errors.join(" | ")}`);
console.log("ASUH full product flow passed");
await browser.close();
