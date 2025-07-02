// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'JouwGolftrip',
		aboutText:
			'Ik help jou en je vrienden aan een onvergetelijke golftrip — precies zoals jullie ‘m willen. Jij geeft aan wat jullie zoeken, ik stel de ideale trip voor jullie samen. Van mooie golfbanen tot fijne accommodaties: alles afgestemd op jullie wensen én budget.',
		logo: {
			src: '/logo.svg',
			alt: 'JouwGolftrip logo',
			text: 'JouwGolftrip'
		}
	},
	footerColumns: [
		{
			category: 'JouwGolftrip',
			subCategories: [
				{
					subCategory: 'Werkwijze',
					subCategoryLink: '/#highlight-1'
				},
				{
					subCategory: 'Inspiratie',
					subCategoryLink: '/#features'
				},
				{
					subCategory: 'Kosten',
					subCategoryLink: '/#highlight-2'
				}
			]
		},
		{
			category: 'Informatie',
			subCategories: [
				{
					subCategory: 'Veelgestelde vragen',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Over mij',
					subCategoryLink: '/faq#overmij'
				}
			]
		},
		{
			category: 'Contact',
			subCategories: [
				{
					subCategory: 'Vraag nu aan',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© JouwGolftrip 2025'
	}
}
