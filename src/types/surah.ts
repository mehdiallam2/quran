export interface SurahType {
  verses: Verse[];
  meta: Meta;
}

export interface Verse {
  id: number;
  verse_key: string;
  text_uthmani: string;
}

export interface Meta {
  filters: Filters;
}

export interface Filters {
  chapter_number: number;
}
