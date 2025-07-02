// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'JouwGolftrip - Golfreizen op maat',
	siteDescription:
		'Ik help jou en je vrienden aan een onvergetelijke golftrip — precies zoals jullie ‘m willen. Jij vertelt wat je zoekt, ik doe het uitzoekwerk. Van mooie banen tot fijne accommodaties: alles afgestemd op jouw wensen en budget.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'JouwGolftrip Logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
