const ProjectTags = ({ tags }) => {
  if (!tags.length) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default ProjectTags;
