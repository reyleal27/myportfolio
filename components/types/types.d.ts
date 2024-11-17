interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;  // Assuming icon is a React component
}

export type Project= {
  id: string | number;
  title: string;
  description: string;
  category: string;
  image: string;
  github: string;
  live: string;
  features: string[];
  technologies: Technology[];
}

export type ProjectCardProps = {
  project: Project,
  index: number
}
