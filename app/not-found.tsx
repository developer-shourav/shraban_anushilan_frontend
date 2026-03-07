import Link from 'next/link'
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h2 className="text-4xl font-bold font-heading text-primary">Page Not Found</h2>
      <p className="text-muted-foreground text-lg">Could not find requested resource</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </Container>
  )
}
