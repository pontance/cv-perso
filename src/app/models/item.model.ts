export class ItemElement {
  image!: string;
  image_popup?: string;
  titre!: string;
  intro?: string;
  texte?: string;
  description?: string;
  url?: string;
  visible!: boolean;
  listeTechnologie?: technologieElement[];
}

export class technologieElement {
  icone!: string;
  technologie!: string;
}
