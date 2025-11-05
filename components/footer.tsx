import { LuGithub, LuInstagram, LuFacebook } from "react-icons/lu";
import Link from "next/link";
import { SiTiktok } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineSpotify, AiOutlineWhatsApp } from "react-icons/ai";

const socialLinks = [
    { href: "https://t.me/yougefor", icon: FaTelegramPlane, label: "Telegram" },
    }
];

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">{`bálzz ${new Date().getFullYear()} • I Think Yt Short Is Good.`}</p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={label}
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                    <div className="text-sm flex text-gray-400 space-x-4">
                        <Link
                            href="/"
                            className="hover:text-white transition-colors"
                        >
                            /
                        </Link>
                        <Link
                            href="/support"
                            className="hover:text-white transition-colors"
                        >
                            Support
                        </Link>
                        <Link
                            href="/api"
                            className="hover:text-white transition-colors"
                        >
                            Api
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
