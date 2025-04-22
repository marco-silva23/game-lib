interface Meta {
  id: string;
  uuid: string;
  sort: string;
  src: string;
  section: string;
  stems: string[]; // Assuming stems is an array of strings
  offensive: boolean;
}

interface Hwi {
  hw: string;
  prs: any[]; // Assuming prs is an array of some type
}

interface InsItem {
  // Define the structure of items within the 'ins' array if known
  [key: string]: any;
}

interface DefItem {
  // Define the structure of items within the 'def' array if known
  [key: string]: any;
}

interface EtItem {
  // Define the structure of items within the 'et' array if known
  [key: string]: any;
}

interface CxsItem {
  // Define the structure of items within the 'cxs' array if known
  [key: string]: any;
}

export interface WebsterDictionaryData {
  meta: Meta;
  hwi: Hwi;
  fl?: string; // Optional property
  ins?: InsItem[]; // Optional property
  def?: DefItem[]; // Optional property
  et?: EtItem[][]; // Optional property
  date?: string; // Optional property
  shortdef: string[];
  cxs?: CxsItem[]; // Optional property
}
