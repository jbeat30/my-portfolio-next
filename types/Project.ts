type NotionTagMultiSelect = {
  id: string;
  name: string;
  color: string;
};

type NotionDate = {
  start: string;
  end: string;
  time_zone: string | null;
};

type NotionRichText = {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
};

type NotionTitle = {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
};

interface PropertyType {
  Name: {
    id: string;
    type: string;
    title: NotionTitle[];
  };
  Github: {
    id: string;
    type: string;
    url: string;
  };
  Description: {
    id: string;
    type: string;
    rich_text: NotionRichText[];
  };
  Tag: {
    id: string;
    type: string;
    multi_select: NotionTagMultiSelect[];
  };
  WorkPeriod: {
    id: string;
    type: string;
    date: NotionDate;
  };
}

interface CoverType {
  type: string;
  external: {
    url: string;
  };
}

interface CreatedByOrEditedByType {
  object: string;
  id: string;
}

export interface ProjectType {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedByOrEditedByType;
  last_edited_by: CreatedByOrEditedByType;
  cover: CoverType | null;
  icon: null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: PropertyType;
  url: string;
  public_url: string | null;
}
