import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
}

const ProjectCard = ({ title, description, image, tags, githubUrl }: ProjectCardProps) => {
  return (
    <div className="group rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
