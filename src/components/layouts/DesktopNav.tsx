import Link from "next/link";
import { Icons } from "../Icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/NavigationMenu";
import { ListItem } from "./ListItem";

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex gap-x-8 items-center">
      <Link href="/" className="flex space-x-2">
        <Icons.logo className="h-6 w-6" aria-hidden="true" />
        <span className="hidden font-bold lg:inline-block">Store Shop</span>
        <span className="sr-only">Inicio</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Lobby</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Icons.logo className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Store Shop
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Uma loja de variados produtos de comércio eletrônico de
                        código aberto construída com tudo de novo em Next.js
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/products" title="Produtos">
                  Todos os produtos que temos para oferecer
                </ListItem>
                <ListItem href="/#categories" title="Categorias">
                  Veja todas as categorias que temos
                </ListItem>
                <ListItem href="/dashboard/stores" title="Criar Loja">
                  Crie uma loja e comece a vender produtos
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2">
                <ListItem
                  href="/products?category=skateboards"
                  title="Especiais"
                >
                  Explore a categoria de produtos especiais
                </ListItem>
                <ListItem href="/products?category=clothing" title="Roupas">
                  Explore a categoria de roupas
                </ListItem>
                <ListItem href="/products?category=shoes" title="Sapatos">
                  Explore a categoria de sapatos
                </ListItem>
                <ListItem
                  href="/products?category=accessories"
                  title="Acessórios"
                >
                  Explore a categoria de acessórios
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
