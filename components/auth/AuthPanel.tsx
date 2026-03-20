"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { BookOpen, HeartHandshake, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ShrabananushilanLogo from "@/assets/logos/shrabananushilan.png";

type AuthMode = "login" | "register";

interface AuthPanelProps {
  initialMode: AuthMode;
}

const modeCopy: Record<AuthMode, { title: string; subtitle: string; button: string }> = {
  login: {
    title: "Welcome back",
    subtitle: "Log in to continue with Shrabananushilan programs, updates, and member resources.",
    button: "Login",
  },
  register: {
    title: "Join Shrabananushilan",
    subtitle: "Create an account to stay connected with gatherings, service opportunities, and publications.",
    button: "Register",
  },
};

const AuthPanel = ({ initialMode }: AuthPanelProps) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const copy = modeCopy[mode];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success(
      mode === "login"
        ? "Login UI is ready. Connect this form to your auth backend when available."
        : "Registration UI is ready. Connect this form to your signup backend when available."
    );
    event.currentTarget.reset();
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-primary/10 bg-background shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden bg-[linear-gradient(160deg,#fff4cc_0%,#ffe3b5_45%,#f2c37a_100%)] p-8 md:p-12">
          <div className="absolute -right-14 -top-12 h-40 w-40 rounded-full bg-white/35 blur-2xl" />
          <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-white/50 bg-white/70 p-3 shadow-lg">
                <Image src={ShrabananushilanLogo} alt="Shrabananushilan logo" className="h-14 w-auto md:h-16" />
              </div>
              <div>
                <p className="font-BanglaHeading text-3xl text-secondary">????????????</p>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-secondary/80">Shrabananushilan</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="max-w-md font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Hear deeply. Practice steadily. Serve together.
              </h2>
              <p className="max-w-lg text-base leading-7 text-foreground/80 md:text-lg">
                This member space is designed for people who want to stay close to Shrabananushilan&apos;s events,
                learning resources, volunteer opportunities, and community updates.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/45 bg-white/55 p-4">
                <BookOpen className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">Study resources</p>
                <p className="mt-1 text-sm text-foreground/70">Access publications, schedules, and reading materials.</p>
              </div>
              <div className="rounded-2xl border border-white/45 bg-white/55 p-4">
                <Users className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">Community connection</p>
                <p className="mt-1 text-sm text-foreground/70">Stay in touch with gatherings, circles, and chapter updates.</p>
              </div>
              <div className="rounded-2xl border border-white/45 bg-white/55 p-4">
                <HeartHandshake className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">Service participation</p>
                <p className="mt-1 text-sm text-foreground/70">Find volunteer opportunities and collaborative initiatives.</p>
              </div>
              <div className="rounded-2xl border border-white/45 bg-white/55 p-4">
                <UserPlus className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">Simple onboarding</p>
                <p className="mt-1 text-sm text-foreground/70">Register once and keep your participation details organized.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background p-8 md:p-12">
          <div className="mx-auto max-w-md">
            <div className="mb-8 inline-flex rounded-full bg-muted p-1">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${mode === "login" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"}`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setMode("register")}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${mode === "register" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"}`}
              >
                Register
              </button>
            </div>

            <div className="mb-8 space-y-3">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">{copy.title}</h1>
              <p className="text-muted-foreground">{copy.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === "register" && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="First name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Last name" required />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>

              {mode === "register" && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" placeholder="Phone number" />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>

              {mode === "register" && (
                <div className="space-y-2">
                  <Label htmlFor="interest">Primary interest</Label>
                  <Input id="interest" placeholder="Study circles, volunteering, publications, youth programs..." />
                </div>
              )}

              <Button type="submit" className="h-11 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                {copy.button}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPanel;
