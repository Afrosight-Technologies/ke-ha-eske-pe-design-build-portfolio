import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
	variable: "--font-amharic",
	subsets: ["ethiopic"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Ke Ha Eske Pe Design And Build",
	description: "From A to Z - Design and Build | ከሀ እስከ ፐ - ንድፍ እና ግንባታ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${notoSansEthiopic.variable} antialiased`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
