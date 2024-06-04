import Link from "next/link";
import OAuthSignIn from "@/components/auth/OAuthSignIn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default async function SignUpPage() {
  return (
    <div className="mx-auto">
      <Card className="w- xl:w-[500px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Cadastrar</CardTitle>
          <CardDescription>
            Escolha seu método de inscrição preferido
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1">
          <OAuthSignIn />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 inline-block">já tem uma conta?</span>
            <Link
              aria-label="Sign in"
              href="/sign-in"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
