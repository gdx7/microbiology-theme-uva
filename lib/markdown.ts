import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ResearchGroupData {
  slug: string;
  name: string;
  code?: string;
  areaSlug: string;
  pi?: string;
  role?: string;
  contactEmail?: string;
  externalUrl?: string;
  shortDescription?: string;
  description?: string;
  whatWeDo?: string;
  howWeDoItExperimental?: string;
  howWeDoItComputational?: string;
  labCulture?: string;
  researchFocus?: string[];
  keywords?: string[];
  teamMembers?: Array<{
    name: string;
    role: string;
    email?: string;
    photo?: string;
    bio?: string;
  }>;
  publications?: Array<{
    title: string;
    authors: string;
    journal: string;
    year: number;
    link?: string;
  }>;
}

export function getResearchGroupBySlug(slug: string): ResearchGroupData | null {
  try {
    const fullPath = path.join(contentDirectory, 'research-groups', `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return data as ResearchGroupData;
  } catch (error) {
    console.error(`Error reading research group ${slug}:`, error);
    return null;
  }
}

export function getAllResearchGroups(): ResearchGroupData[] {
  const groupsDirectory = path.join(contentDirectory, 'research-groups');

  if (!fs.existsSync(groupsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(groupsDirectory);
  const allGroupsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      return getResearchGroupBySlug(slug);
    })
    .filter((group): group is ResearchGroupData => group !== null);

  return allGroupsData;
}
