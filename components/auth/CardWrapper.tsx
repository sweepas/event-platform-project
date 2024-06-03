"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./BackButton";
import { Header } from "./Header";
import { Social } from "./Social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backBtnLabel: string;
  backBtnHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backBtnLabel,
  backBtnHref,
  showSocial,
}: CardWrapperProps) => {
  return <Card className="w-[400px] shadow-md">
    <CardHeader>
        <Header label={headerLabel}/>
    </CardHeader>
    <CardContent>
    {children}
    </CardContent>
    {showSocial && <CardFooter>
        <Social/>
        </CardFooter>}
        <CardFooter>
            <BackButton 
            label={backBtnLabel}
            href={backBtnHref}/>
        </CardFooter>
    </Card>;
};
