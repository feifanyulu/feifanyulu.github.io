// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "arcSYSu",
		imgurl: "https://xianweiz.github.io/imgs/lab.webp",
		desc: "arcSYSu, refining computing system uses",
		siteurl: "https://xianweiz.github.io",
		tags: ["computing system"],
	},
	{
		id: 2,
		title: "励志荷包蛋",
		imgurl: "https://avatars.githubusercontent.com/u/87697198?s=130&v=4",
		desc: "天下第一好的学委",
		siteurl: "https://leungto.github.io",
		tags: ["本科同学", "RL"],
	},
	{
		id: 3,
		title: "橙",
		imgurl: "https://avatars.githubusercontent.com/u/103010544?s=130&v=4",
		desc: "无私奉献大佬杨老师",
		siteurl: "https://a-y-1.github.io",
		tags: ["本科同学", "HPC"],
	},
	{
		id: 4,
		title: "大菠萝",
		imgurl: "https://avatars.githubusercontent.com/u/26243350?s=130&v=4",
		desc: "爱在提瓦特世界里City Walk的一位师弟",
		siteurl: "https://mrcer.github.io/Blog",
		tags: ["研究生同学", "向量检索"],
	},
	{
		id: 5,
		title: "chen-hq",
		imgurl: "https://avatars.githubusercontent.com/u/137140486?s=130&v=4",
		desc: "很厉害的本科生师弟",
		siteurl: "https://chen-hq.site",
		tags: ["研究生同学"],
	},
	{
		id: 6,
		title: "星卜星卜",
		imgurl: "https://avatars.githubusercontent.com/u/103045543?v=4",
		desc: "上班白月光",
		siteurl: "https://jingyihe268.github.io",
		tags: ["研究生同学", "GPU"],
	},
	// {
	// 	id: 7,
	// 	title: "GitHub",
	// 	imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
	// 	desc: "Where the world builds software",
	// 	siteurl: "https://github.com",
	// 	tags: ["Development", "Platform"],
	// },
	// {
	// 	id: 8,
	// 	title: "MDN Web Docs",
	// 	imgurl: "https://avatars.githubusercontent.com/u/7565578?v=4&s=640",
	// 	desc: "The web's most comprehensive resource for web developers",
	// 	siteurl: "https://developer.mozilla.org",
	// 	tags: ["Docs", "Reference"],
	// },
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
