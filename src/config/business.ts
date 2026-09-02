export type Service = { title: string; description: string; eyebrow: string };
export type BusinessConfig = {
  businessName: string; professionalName: string; credential: string; specialty: string;
  bio: string; city: string; region: string; address: string[]; instagram: string;
  googleMaps: string; mapEmbed: string; whatsappNumber: string | null; whatsappMessage: string;
  googleRating: string | null; googleReviewCount: number | null; services: Service[];
  testimonials: { quote: string; author: string }[]; results: { src: string; alt: string }[];
  images: Record<'hero' | 'specialty' | 'professional' | 'experience', { src: string; alt: string }>;
  seo: { title: string; description: string; url: string };
};

/** Única fonte de verdade da demo. Troque este objeto e as imagens para reutilizar o template. */
export const business: BusinessConfig = {
  businessName: 'Brenda Estética Avançada',
  professionalName: 'Brenda Emanuelly',
  credential: 'Biomédica – UCB',
  specialty: 'Especialista em melasma e tratamentos faciais',
  bio: 'Um olhar atento para as particularidades de cada pele, com atuação dedicada ao melasma e aos cuidados faciais. Cada atendimento começa pela escuta e por uma avaliação individual.',
  city: 'Curitiba', region: 'PR',
  address: ['R. Conselheiro Laurindo, 459, sala 32', 'Centro', 'Curitiba – PR'],
  instagram: 'https://www.instagram.com/brenda.esteticaavancada/',
  googleMaps: 'https://www.google.com/maps/place/Brenda+Est%C3%A9tica+Avan%C3%A7ada/@-25.4307919,-49.2644617,17z/data=!4m6!3m5!1s0x94dce54d93ecc55d:0x22f9795e0ca08e6c!8m2!3d-25.4307919!4d-49.2644617!16s%2Fg%2F11wtk8jpyg',
  mapEmbed: 'https://www.google.com/maps?q=R.%20Conselheiro%20Laurindo%20459%20Curitiba&output=embed',
  whatsappNumber: null,
  whatsappMessage: 'Olá, Brenda! Gostaria de saber mais sobre a avaliação.',
  googleRating: null,
  googleReviewCount: null,
  services: [
    { eyebrow: '01', title: 'Avaliação para Melasma', description: 'Um encontro dedicado a compreender as características e necessidades atuais da sua pele.' },
    { eyebrow: '02', title: 'Limpeza de Pele Premium', description: 'Cuidado facial realizado com atenção individual e respeito ao momento da sua pele.' },
    { eyebrow: '03', title: 'Tratamentos Faciais', description: 'Cuidados personalizados, definidos de acordo com a avaliação e os objetivos de cada paciente.' }
  ],
  testimonials: [], results: [],
  images: {
    hero: { src: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1600&q=85', alt: 'Retrato editorial de mulher sob luz natural' },
    specialty: { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=85', alt: 'Mulher aplicando cuidado suave à pele do rosto' },
    professional: { src: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=85', alt: 'Imagem editorial licenciada, provisória para fotografia da profissional' },
    experience: { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85', alt: 'Ambiente sereno de cuidado facial' }
  },
  seo: { title: 'Brenda Estética Avançada | Cuidados faciais em Curitiba', description: 'Demonstração de website para cuidados com melasma, avaliação individual e estética facial no Centro de Curitiba.', url: 'https://example.com' }
};

export function whatsappUrl() {
  const number = business.whatsappNumber?.replace(/\D/g, '');
  return number && number.length >= 10 ? `https://wa.me/${number}?text=${encodeURIComponent(business.whatsappMessage)}` : null;
}
