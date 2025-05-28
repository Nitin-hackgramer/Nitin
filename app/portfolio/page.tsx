import { Metadata } from "next";
import EnhancedNavbar from "./components/navbar-section"; 
export const metadata: Metadata = {
    title: "Portfolio | Nitin Sharma - Full-Stack Developer & Community Leader",
    description: "Comprehensive portfolio showcasing my skills, projects, education, and experience as a full-stack developer and community leader.",
};

export default function PortfolioPage() {
    return (
        <>
            <EnhancedNavbar /> 
        </>
    );
}
