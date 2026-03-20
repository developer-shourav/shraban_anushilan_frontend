import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import AuthPanel from "@/components/auth/AuthPanel";

export const metadata: Metadata = {
  title: "Login / Register - Shrabananushilan",
  description: "Access the Shrabananushilan member area or create a new account.",
};

type AuthPageProps = {
  searchParams?: Promise<{
    mode?: string;
  }>;
};

const AuthPage = async ({ searchParams }: AuthPageProps) => {
  const params = await searchParams;
  const initialMode = params?.mode === "register" ? "register" : "login";

  return (
    <>
      <PageHeader
        title="Member Access"
        subtitle="Login or register to stay connected with Shrabananushilan activities, publications, and community updates."
      />
      <Container>
        <AuthPanel initialMode={initialMode} />
      </Container>
    </>
  );
};

export default AuthPage;
