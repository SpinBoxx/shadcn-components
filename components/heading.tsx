interface Props {
  title: string;
  description: string;
}

const Heading = ({ title, description }: Props) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-bold tracking-tight underline">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default Heading;
