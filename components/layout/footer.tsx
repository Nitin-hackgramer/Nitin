import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl">
              
              <h2 className="text-xl font-bold flex items-center">
              <Cpu className="mr-2 h-5 w-5 text-primary" />
                Nitin Sharma
              <span className="text-accent">.</span>
              </h2>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Transforming ideas into exceptional web experiences. Specializing in custom web development with modern technologies.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                <Link href="https://github.com/nitin-hackgramer" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                <Link href="https://www.linkedin.com/in/nitin-sharma-a1a1a62ab/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Twitter">
                <Link href="https://x.com/NitinSh60345544" target="_blank" rel="noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Email">
                <Link href="mailto:nitinkumar12082005@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>nitinkumar12082005@gmail.com</li>
              <li>+91 9968358455</li>
              <li className="pt-2">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Available for work
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nitin Sharma. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}