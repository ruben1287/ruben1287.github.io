import {
  AWS,
  Azure,
  Bash,
  Docker,
  Git,
  GitLab,
  Jenkins,
  PowerShell,
  Python,
} from "developer-icons";
import SonarQubeIcon from "@/components/ui/icons/sonarqube.astro";
import TfsIcon from "@/components/ui/icons/tfs.astro";

export const TECH_STACK = [
  {
    title: "Jenkins",
    href: "https://www.jenkins.io/",
    icon: Jenkins,
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    icon: Git,
  },
  {
    title: "Docker",
    href: "https://www.docker.com/",
    icon: Docker,
  },
  {
    title: "Azure DevOps",
    href: "https://azure.microsoft.com/products/devops/",
    icon: Azure,
  },
  {
    title: "TFS",
    href: "https://learn.microsoft.com/azure/devops/server/tfs-is-now-azure-devops-server",
    icon: TfsIcon,
  },
  {
    title: "AWS",
    href: "https://aws.amazon.com/",
    icon: AWS,
  },
  {
    title: "SonarQube",
    href: "https://www.sonarsource.com/products/sonarqube/",
    icon: SonarQubeIcon,
  },
  {
    title: "GitLab",
    href: "https://about.gitlab.com/",
    icon: GitLab,
  },
  {
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
    icon: Bash,
  },
  {
    title: "PowerShell",
    href: "https://learn.microsoft.com/powershell/",
    icon: PowerShell,
  },
  {
    title: "Python",
    href: "https://www.python.org/",
    icon: Python,
  },
];
