export type KSBType = 'knowledge' | 'skill' | 'behavior';

export interface KSBItem {
  id: string;
  code: string;
  type: KSBType;
  title: string;
  description: string;
}

export interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeEstimate: string;
}

export interface EvidenceSuggestion {
  id: string;
  type: string;
  description: string;
  examples: string[];
}

export interface KSBDetail {
  projectIdeas: ProjectIdea[];
  evidenceSuggestions: EvidenceSuggestion[];
}
