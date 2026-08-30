// 言語切り替え（JP / EN / CH）
// 日本語はHTML原文をそのまま使用し、EN/ZHは以下の辞書で置き換える
(function () {
    'use strict';

    const translations = {
        en: {
            'hero.title_main': 'Sapporo Sugoi AI Festival<br>2026 Summer',
            'hero.title_sub': '札幌すごいAIまつり 2026夏',
            'hero.tagline': 'Igniting the flame of AI in Sapporo.<br>Learn, challenge, and have fun.<br>A citizen-driven AI project, ignited.',
            'hero.badge1': 'Free',
            'hero.badge2': 'Come & go freely',
            'hero.badge3': 'No registration required',
            'btn.discord': 'Join the Sapporo Sugoi AI Community on Discord',
            'btn.entry': 'Entry & Details',

            'overview.title': 'Event Overview',
            'overview.subtitle': 'Lighting the Flame of AI in Sapporo',
            'overview.p1': 'On August 29, 2026, an unprecedented AI festival will be held at <strong>Deep Tech CORE SAPPORO</strong>, the heart of Sapporo’s cutting-edge tech community.',
            'overview.p2': 'By connecting the AI “sparks” now lighting up across Sapporo, we aim to nurture people who can use AI and create a culture of challenging and enjoying it. We want to make Sapporo a city that lives together with AI. The first step is the Sapporo Sugoi AI Festival 2026 Summer.',
            'overview.date_label': 'Date & Time',
            'overview.date_value': 'Saturday, August 29, 2026 — Doors open 9:30 to around 20:30',
            'overview.event_label': 'Events',
            'overview.event_value': 'AI Arts & Film Festival / AI Hackathon / AI Exhibition & Hands-on / AI Lightning Talks',
            'overview.venue_label': 'Venue',
            'overview.venue_value': 'Deep Tech CORE SAPPORO<br>Giant screen & pitch area + exhibition booths, fully reserved',

            'sponsors.title': 'Sponsors',
            'sponsors.description': 'These are the companies, organizations, and services supporting the AI Festival.<br>We are deeply grateful for their warm support.',
            'sponsors.link': 'Interested in becoming a sponsor?',
            'sponsor.nttdmse': 'NTT DATA MSE Corporation',
            'sponsor.hpjapan': 'HP Japan Inc.',
            'sponsor.eques': 'EQUES Inc.',
            'sponsor.dtc': 'DTC Inc.',
            'sponsor.sapporo_logo': 'City of Sapporo',
            'sponsor.sapporo': 'Supported by the City of Sapporo',

            'contents.title': 'Contents',
            'contents.description': 'Challenge, create, and experience — five programs that unleash the full potential of AI',
            'tt.title': 'Timetable',
            'tt.note': 'AI Exhibition & Hands-on runs all day (9:30–19:30)',
            'tt.r1': 'Doors open',
            'tt.r2': 'Opening',
            'tt.r3': 'AI Arts & Film Festival',
            'tt.r4': 'AI Hackathon (development)',
            'tt.r4b': 'AI Hackathon (slide creation)',
            'tt.r5': 'AI Hackathon (presentations)',
            'tt.r6': 'AI Hackathon (judging & results)',
            'tt.r7time': '~18:00',
            'tt.r7': 'AI Lightning Talks',
            'tt.r8time': 'Until ~20:30',
            'tt.r8': 'Casual on-site networking',

            'p1.title': 'AI Hackathon',
            'p1.description': 'A development event where you use AI to bring ideas to life within a limited time. Join solo or as a team. Experience the joy of building together with AI, hands-on, and present what you create on the spot.',
            'p1.highlight': 'Turn ideas into reality on the spot — making things with AI',
            'p2.title': 'AI Film Festival',
            'p2.description': 'A community film festival where you challenge yourself to make films with AI. Your AI film will be screened on a wall-sized, roughly 200-inch screen and simultaneously streamed on YouTube. Every creator who comes to Sapporo on the day gets screened. First-time filmmakers are more than welcome.',
            'p2.highlight': 'Now accepting entries! Deadline: Sunday, August 16. Bring your AI film to the big screen',
            'p3.title': 'AI Exhibition & Hands-on',
            'p3.description': 'Exhibition and hands-on booths where you can actually try AI tools and works. See, touch, and experiment. Even complete beginners can casually experience how amazing and fun AI is — the gateway to the festival.',
            'p3.highlight': 'Not just watching — touch and feel your first encounter with AI',
            'p3.entry': 'Exhibitor Entry',
            'p4.title': 'AI Arts Festival',
            'p4.description': 'Music, illustration, photography, poetry, design… a festival of the arts bringing together every kind of expression created with AI. Works are exhibited and presented across genres, letting you witness the moment humans create together with AI.',
            'p4.highlight': 'An experience that crosses the boundary between art and technology',
            'p4.entry': 'Performer Entry',
            'p5.title': 'AI Lightning Talks',
            'p5.description': 'A stage for sharing your everyday AI activities, challenges, and learnings in 5-minute lightning talks. From beginners to veterans, anyone can take the stage. Get inspired by others’ challenges and find the spark for your own next step.',
            'p5.highlight': 'Share your AI experience with everyone',
            'p5.entry': 'Speaker Entry',

            'participation.title': 'Anyone can take on the challenge, for free',
            'participation.description': 'Speak, exhibit, create. All you need is a little courage and the will to learn AI.<br>Detailed requirements and how to apply are available in our Discord community.',

            'dojo.title': 'The Learning Foundation Behind It All',
            'dojo.name': 'Sugoi AI Dojo',
            'dojo.subtitle': 'AI Learning Platform — a free e-learning site',
            'dojo.p1': 'An online learning site for learning AI from zero in a practical way, directly connected to real-world challenges. It is designed to lead systematically into building businesses and creative work.',
            'dojo.p2': '<strong>Free access for everyone, from anywhere in Japan.</strong> Not just festival participants — everyone can build a foundation of AI knowledge and take on the festival’s programs.',
            'dojo.feature1': 'A systematic curriculum you can learn from zero',
            'dojo.feature2': 'Directly connected to business & creative work',
            'dojo.feature3': 'Free to use from anywhere in Japan',
            'dojo.cta': 'Start learning at Sugoi AI Dojo',

            'value.title': 'Why We Started This Festival',
            'value.quote': '“I’ve never touched AI.”<br>“I don’t know what it can do.”',
            'value.p1': 'Running AI events in Sapporo, we heard this from many of our 230 participants.',
            'value.p2': 'But I know this: <strong>AI dramatically expands human potential.</strong> It is a partner that helps turn dreams you once thought impossible into a tangible reality.',
            'value.emphasis': 'In that moment, people’s faces change. Anxiety turns into hope.',
            'value.p3': 'This chain of “I did it!” moments is the energy of the next era. And Sapporo has the soil to nurture it — the sparks are already burning.',
            'value.cta': 'That is why we want to add fuel and grow it into a great flame.<br><strong>We want to start now, from this city.</strong>',

            'cta.title': 'Light the Flame of AI in Sapporo, Together',
            'cta.description': 'Every bit of support you give spreads the flame of AI across Sapporo.<br>Let’s grow a culture of learning, challenging, and enjoying AI together.',
            'cta.dojo_btn': 'Learn at Sugoi AI Dojo',

            'organizer.title': 'Organizer',
            'organizer.name': 'Yusuke Kishimoto',
            'organizer.role': 'The AI Samurai of Sapporo',
            'organizer.bio1': 'Founder, Sapporo Sugoi AI Community / Father of one',
            'organizer.bio2': 'AI Samurai: plays the shakuhachi for fun; skilled with the katana.',
            'organizer.msg_title': 'The Birth of My Child Drives This Project',
            'organizer.msg_p1': 'In July 2025, my first child was born. Becoming a parent made me think seriously, for the first time, about the future Sapporo my child will live in.',
            'organizer.msg_p2': 'By the time this child grows up, I want society to be one where <strong>everyone uses AI to expand their lives</strong> — not one that fears AI.',
            'organizer.msg_p3': 'For that to happen, we adults must start right now, building a culture of learning AI while having fun. This belief is the heart of the project.',

            'footer.logo_title': 'Sapporo Sugoi AI Festival 2026 Summer',
            'footer.logo_sub': '札幌すごいAIまつり 2026夏',
            'footer.dojo': 'Sugoi AI Dojo',
            'footer.organizer': 'Organized by the Sapporo Sugoi AI Community',
            'footer.venue': 'Venue: Deep Tech CORE SAPPORO',
            'footer.copyright': '&copy; 2026 Sapporo Sugoi AI Community. All rights reserved.',
            'footer.disclaimer': '* This event is run by individual volunteers and does not represent any specific company or organization.',

            'sp.back': '← Back to Top Page',
            'sp.hero_title': 'Become a Sponsor',
            'sp.hero_description': 'Bring the flame of AI to Sapporo.<br>Join us in supporting a citizen-driven AI festival for learning, challenging, and having fun.',
            'sp.past_title': 'How We Feature Sponsors',
            'sp.past_description': 'Scenes from past events.<br>Sponsor companies and organizations were featured at the venue and on our website.',
            'sp.past_label1': 'Example 1: Sapporo Sugoi AI Festival 2026 Winter',
            'sp.past_label2': 'Example 2: Sapporo Sugoi AI Hackathon 2026 Spring',
            'sp.why_title': 'Why Become a Sponsor',
            'sp.benefit1_title': 'Meet the people taking on challenges with AI',
            'sp.benefit1_description': 'The AI Arts & Film Festival, AI Hackathon, and AI Lightning Talks. The people who gather here are actually building and challenging themselves with AI, hands-on. Whether for hiring, co-creation, or partnership, it is a place to meet people who get it — all at once.',
            'sp.benefit2_title': 'Become a founder of Sapporo’s AI culture',
            'sp.benefit2_description': 'This citizen-driven AI festival is at the very moment of taking root as a culture. Only the first few editions offer the chance to be remembered as a company that supported it from the start. This is not buying ad space — it is an investment recorded as a founding act of a culture.',
            'sp.benefit3_title': 'Reach an audience of 100% participants',
            'sp.benefit3_description': 'Everyone looking up at the giant screen, everyone posting impressions on social media — they are all people who learn, use, and create with AI, or want to. This is deep, in-context reach, different in kind from the vague exposure of mass advertising.',
            'sp.platinum_name': 'Platinum Sponsor',
            'sp.platinum_description': 'Limited to 2 slots per event. Put your name on an award and stay in challengers’ memories.<br>Create a festival award in your company’s name — branding that ads can’t buy.',
            'sp.benefits_title': 'Benefits',
            'sp.item_award': '<strong>Naming rights for an award at one on-site event (e.g., the ○○ Award, the ○○ CEO Award — presented with any name and comment you like)</strong>',
            'sp.item_cm': '<strong>A 15–60 second commercial played at all on-site events (any length)</strong>',
            'sp.item_booth': '<strong>An on-site booth for your company</strong>',
            'sp.item_promo': '<strong>Distribution of promotional materials at your booth</strong>',
            'sp.item_opening': 'Company name & logo introduced at the event opening',
            'sp.item_website': 'Company name & logo on the official website',
            'sp.item_invite': 'Invitations to the Sapporo on-site event for everyone who wishes to attend (general seating)',
            'sp.gold_name': 'Gold Sponsor',
            'sp.gold_description': 'Set up a booth at the venue and connect directly with attendees.<br>Deliver your services and vision straight to an AI-savvy audience.',
            'sp.silver_name': 'Silver Sponsor',
            'sp.silver_description': 'Equivalent in-kind services and the like are also welcome.<br>Your name will remain in the record of Sapporo’s AI culture as a company that supported it from the start.',
            'sp.notes_title': 'Common Terms & Notes',
            'sp.note_date': '<strong>Date & Time</strong>: Saturday, August 29, 2026 — doors open 9:30 to around 20:30',
            'sp.note_venue': '<strong>Venue</strong>: Deep Tech CORE SAPPORO',
            'sp.note_slots': '<strong>Platinum slots</strong>: limited to 2 (first come, first served)',
            'sp.note_award': '<strong>Award selection (Platinum only)</strong>: winners can be chosen by the judges, or directly by your company’s employees. Please specify the award name in advance.',
            'sp.note_cm': '<strong>Commercial video (Platinum only)</strong>: any length from 15 to 60 seconds, played at all on-site events. It can be omitted if you prefer.',
            'sp.note_booth': '<strong>Booth (Platinum & Gold)</strong>: booth location and size may be adjusted to fit the venue layout. Please prepare your own promotional materials.',
            'sp.note_data': '<strong>Data submission</strong>: please submit your commercial video, company name, and logo data in advance by email.',
            'sp.note_stream': '<strong>Streaming</strong>: due to streaming conditions and video formats, image quality may be reduced in the online stream. Thank you for your understanding.',
            'sp.note_travel': '<strong>Travel & accommodation</strong>: sponsors are responsible for their own travel and accommodation expenses.',
            'sp.note_contact': '<strong>Contact</strong>: details will be provided by email.',
            'sp.contact_title': 'Sponsorship Applications<br>& Inquiries',
            'sp.contact_description': 'If your company or organization is interested in sponsoring,<br>please feel free to contact us by email.',
            'sp.footer_top': 'Top Page'
        },
        zh: {
            'hero.title_main': '札幌SUGOI AI祭典<br>2026夏',
            'hero.title_sub': 'Sapporo Sugoi AI Festival 2026 Summer',
            'hero.tagline': '让AI之火点燃札幌。<br>学习、挑战、尽情享受。<br>由市民发起的AI项目，正式点火。',
            'hero.badge1': '免费',
            'hero.badge2': '自由入场离场',
            'hero.badge3': '无需提前报名',
            'btn.discord': '加入札幌SUGOI AI会 Discord',
            'btn.entry': '报名・详情',

            'overview.title': '活动概要',
            'overview.subtitle': '在札幌点亮AI之火',
            'overview.p1': '2026年8月29日，一场前所未有的AI祭典将在札幌尖端科技社区的中心——<strong>Deep Tech CORE SAPPORO</strong>举行。',
            'overview.p2': '我们要把在札幌各处点亮的AI「火种」连接起来，培养会用AI的人才，营造勇于挑战、乐在其中的文化。我们希望把札幌打造成「与AI共生的城市」。而第一步，就是「札幌SUGOI AI祭典 2026夏」。',
            'overview.date_label': '举办时间',
            'overview.date_value': '2026年8月29日（周六）9:30开场～20:30左右',
            'overview.event_label': '活动内容',
            'overview.event_value': 'AI艺术节・AI电影节 ／ AI黑客马拉松 ／ AI展示体验会 ／ AI闪电演讲会',
            'overview.venue_label': '会场',
            'overview.venue_value': 'Deep Tech CORE SAPPORO<br>超大屏幕・路演区＋展位 全场包场',

            'sponsors.title': '赞助商',
            'sponsors.description': '以下是支持AI祭典的赞助企业、团体与服务。<br>对他们的热情支持致以衷心的感谢。',
            'sponsors.link': '赞助商招募详情',
            'sponsor.nttdmse': 'NTT DATA MSE株式会社',
            'sponsor.hpjapan': '日本惠普（HP Japan）',
            'sponsor.eques': 'EQUES株式会社',
            'sponsor.dtc': 'DTC株式会社',
            'sponsor.sapporo_logo': '札幌市',
            'sponsor.sapporo': '支持单位：札幌市',

            'contents.title': '活动内容',
            'contents.description': '挑战、创造、体验。最大限度释放AI可能性的五大项目',
            'tt.title': '时间表',
            'tt.note': 'AI展示体验会全天开放（9:30～19:30）',
            'tt.r1': '开场',
            'tt.r2': '开幕式',
            'tt.r3': 'AI艺术节・AI电影节',
            'tt.r4': 'AI黑客马拉松（开发）',
            'tt.r4b': 'AI黑客马拉松（制作幻灯片）',
            'tt.r5': 'AI黑客马拉松（成果发表）',
            'tt.r6': 'AI黑客马拉松（评审・结果公布）',
            'tt.r7time': '18:00左右',
            'tt.r7': 'AI闪电演讲会',
            'tt.r8time': '～20:30左右',
            'tt.r8': '轻松现场交流会',

            'p1.title': 'AI黑客马拉松',
            'p1.description': '在有限时间内，运用AI将创意变为现实的开发活动。个人或组队均可参加。亲自动手感受与AI一起「创造」的乐趣，并现场发表成果。',
            'p1.highlight': '让创意当场成形。与AI一起创造',
            'p2.title': 'AI电影节',
            'p2.description': '挑战用AI制作电影的社区型电影节。你创作的AI电影将在会场整面墙、约200英寸的大屏幕上放映，并同步在YouTube直播。当天到场札幌的创作者作品全部放映。首次创作也非常欢迎。',
            'p2.highlight': '作品征集中！截止日期为8月16日（周日）。让你的AI影像登上大银幕',
            'p3.title': 'AI展示体验会',
            'p3.description': '可以亲手接触AI工具和作品的展示体验区。看一看、摸一摸、试一试。即使是初次接触AI的人，也能轻松感受AI的「厉害」与「有趣」，是祭典的入口空间。',
            'p3.highlight': '不只是看。亲手触摸感受，与AI的初次相遇',
            'p3.entry': '展示报名',
            'p4.title': 'AI艺术节',
            'p4.description': '音乐、插画、摄影、诗歌、设计……汇集所有与AI共同创作的表达形式的综合艺术盛典。作品跨越类型界限进行展示与发表，让你亲身感受人与AI「共同创作」的瞬间。',
            'p4.highlight': '跨越艺术与科技边界的体验',
            'p4.entry': '演出报名',
            'p5.title': 'AI闪电演讲会',
            'p5.description': '用5分钟的闪电演讲，分享你平日的AI实践、挑战与学习心得。无论新手还是老手，任何人都可以登台。从伙伴的挑战中获得激励，迈出下一步。',
            'p5.highlight': '把你的AI体验分享给大家',
            'p5.entry': '演讲报名',

            'participation.title': '任何人都可以免费挑战',
            'participation.description': '登台、展示、创作。你需要的只是一点勇气和学习AI的热情。<br>详细参加条件和报名方式请见Discord社区。',

            'dojo.title': '支撑一切的学习平台',
            'dojo.name': 'SUGOI AI道场',
            'dojo.subtitle': 'AI学习平台 - 免费学习的e-learning网站',
            'dojo.p1': '从零开始实践性地学习AI，并直接对接现实挑战的在线学习网站。课程经过体系化设计，可直接应用于商业和创意创作。',
            'dojo.p2': '<strong>全国任何地方、任何人都可免费使用。</strong>不仅是祭典参加者，所有人都能学习AI基础知识，为挑战各项内容打下基础。',
            'dojo.feature1': '从零学起的系统化课程',
            'dojo.feature2': '直接对接商业与创意',
            'dojo.feature3': '全国任何地方均可免费使用',
            'dojo.cta': '在SUGOI AI道场开始学习',

            'value.title': '我们为什么发起这场祭典',
            'value.quote': '「我从来没接触过AI」<br>「不知道AI能做什么」',
            'value.p1': '在札幌持续举办AI活动的过程中，我们从230名参加者中的许多人那里听到了这样的话。',
            'value.p2': '但我知道，<strong>AI能极大地拓展人的可能性</strong>。它是一位伙伴，能和你一起把曾经觉得不可能实现的梦想，变成触手可及的现实。',
            'value.emphasis': '在那一瞬间，人们的表情变了。不安变成了希望。',
            'value.p3': '这种「我做到了！」的连锁反应，正是下一个时代的能量。而札幌拥有孕育它的土壤，火种已经点燃。',
            'value.cta': '正因如此，我们想为它添柴加薪，把它培育成熊熊烈火。<br><strong>就从现在、从这座城市开始。</strong>',

            'cta.title': '一起在札幌点燃AI之火',
            'cta.description': '你点亮的每一份支持，都会让AI之火在札幌蔓延。<br>让我们一起培育学习AI、挑战AI、享受AI的文化。',
            'cta.dojo_btn': '在SUGOI AI道场学习',

            'organizer.title': '主办者',
            'organizer.name': '岸本 悠佑',
            'organizer.role': '札幌的AI武士',
            'organizer.bio1': '札幌SUGOI AI会 代表 / 一个孩子的父亲',
            'organizer.bio2': 'AI武士：爱好尺八，擅长刀术。',
            'organizer.msg_title': '孩子的诞生，是这个项目的原动力',
            'organizer.msg_p1': '2025年7月，我的第一个孩子出生了。成为父亲后，我第一次开始认真思考孩子将来生活的札幌会是什么样子。',
            'organizer.msg_p2': '希望在这个孩子长大成人时，社会不是「恐惧AI的社会」，而是<strong>「人人都能驾驭AI、拓展人生的社会」</strong>。',
            'organizer.msg_p3': '为此，从此时此刻起，大人们就必须营造一种乐在其中学习AI的文化。这份心愿，正是这个项目的核心。',

            'footer.logo_title': '札幌SUGOI AI祭典 2026夏',
            'footer.logo_sub': 'Sapporo Sugoi AI Festival 2026 Summer',
            'footer.dojo': 'SUGOI AI道场',
            'footer.organizer': '主办：札幌SUGOI AI会',
            'footer.venue': '场地协助：Deep Tech CORE SAPPORO',
            'footer.copyright': '&copy; 2026 札幌SUGOI AI会 版权所有',
            'footer.disclaimer': '※本活动为个人志愿者活动，不代表任何特定企业或团体。',

            'sp.back': '← 返回首页',
            'sp.hero_title': '赞助商招募',
            'sp.hero_description': '让AI之火点燃札幌。<br>诚邀您一起支持这场学习、挑战、尽情享受的市民自发AI祭典。',
            'sp.past_title': '赞助商展示示例',
            'sp.past_description': '过去活动的实施情况。<br>我们在会场和官网上介绍了赞助企业与团体。',
            'sp.past_label1': '案例1：札幌SUGOI AI祭典 2026冬',
            'sp.past_label2': '案例2：札幌SUGOI AI黑客马拉松 2026春',
            'sp.why_title': '成为赞助商的意义',
            'sp.benefit1_title': '结识「用AI挑战」的人',
            'sp.benefit1_description': 'AI艺术节・AI电影节、AI黑客马拉松、AI闪电演讲会。聚集在这里的，都是真正动手用AI创作、挑战的人。无论是招聘、共创还是合作，这里都能让您一次性遇到「一点就通」的伙伴。',
            'sp.benefit2_title': '成为札幌AI文化的「发起人」',
            'sp.benefit2_description': '市民自发的AI祭典，正处于成长为一种文化的关键时刻。能被铭记为「从一开始就支持」的企业，机会只在最初的几届。这不是购买广告位，而是一种会被记录为文化发起人的投资。',
            'sp.benefit3_title': '触达的全都是「当事者」',
            'sp.benefit3_description': '无论是仰望会场大屏幕的人，还是在社交媒体上发表感想的人，都是正在学习、使用、创作AI，或渴望如此的人。这是与大众广告「不经意扫过」的曝光完全不同的、有深度语境的触达。',
            'sp.platinum_name': '白金赞助商',
            'sp.platinum_description': '每场活动仅限2席。将贵司之名刻在奖项上，长留于挑战者的记忆中。<br>能以贵司名义设立祭典奖项，是广告买不到的品牌塑造。',
            'sp.benefits_title': '权益内容',
            'sp.item_award': '<strong>可在任一现场活动中冠名奖项（例：〇〇奖、〇〇总裁奖等，名称与颁奖评语均可自定）</strong>',
            'sp.item_cm': '<strong>在全部现场活动中播放15～60秒的广告片（时长自定）</strong>',
            'sp.item_booth': '<strong>以法人名义设置现场展位</strong>',
            'sp.item_promo': '<strong>在展位发放宣传品</strong>',
            'sp.item_opening': '开幕时介绍企业名称与Logo',
            'sp.item_website': '官网刊登企业名称与Logo',
            'sp.item_invite': '凡有意愿者均可受邀参加札幌现场活动（普通席）',
            'sp.gold_name': '黄金赞助商',
            'sp.gold_description': '在会场设置展位，与来场者直接交流。<br>向对AI高度敏感的来场者，直接传递贵司的服务与理念。',
            'sp.silver_name': '白银赞助商',
            'sp.silver_description': '也可以提供同等价值的服务等作为赞助。<br>作为「从一开始就支持」的企业，贵司之名将留在札幌AI文化的记录中。',
            'sp.notes_title': '共同事项・备注',
            'sp.note_date': '<strong>时间</strong>：2026年8月29日（周六）9:30开场～20:30左右',
            'sp.note_venue': '<strong>地点</strong>：Deep Tech CORE SAPPORO',
            'sp.note_slots': '<strong>白金名额</strong>：仅限2席（先到先得）',
            'sp.note_award': '<strong>奖项评选（仅限白金）</strong>：获奖者可由评委评选，也可由贵司・贵团体的员工直接选定。奖项名称请提前告知。',
            'sp.note_cm': '<strong>广告片（仅限白金）</strong>：时长15～60秒自定，在全部现场活动中播放。如不需要可省略。',
            'sp.note_booth': '<strong>展位（白金・黄金）</strong>：展位位置与面积将根据会场布局进行调整。宣传品请各企业自行准备。',
            'sp.note_data': '<strong>资料提交</strong>：广告片、企业名称、Logo等资料请提前通过邮件提交。',
            'sp.note_stream': '<strong>关于直播</strong>：受直播环境和视频格式所限，线上直播画质可能有所下降，敬请谅解。',
            'sp.note_travel': '<strong>交通与住宿费用</strong>：赞助商的交通及住宿费用请自行承担。',
            'sp.note_contact': '<strong>联系方式</strong>：详情将通过邮件联系。',
            'sp.contact_title': '赞助申请・<br>咨询',
            'sp.contact_description': '有意成为赞助商的企业与团体，<br>欢迎随时通过邮件与我们联系。',
            'sp.footer_top': '首页'
        }
    };

    const page = document.body.dataset.page || 'index';
    const pageTitlesByPage = {
        index: {
            en: 'Sapporo Sugoi AI Festival 2026 Summer | Aug 29, 2026',
            zh: '札幌SUGOI AI祭典 2026夏 | 2026.8.29 举办'
        },
        sponsors: {
            en: 'Become a Sponsor | Sapporo Sugoi AI Festival 2026 Summer',
            zh: '赞助商招募 | 札幌SUGOI AI祭典 2026夏'
        }
    };
    const pageTitles = Object.assign({ ja: document.title }, pageTitlesByPage[page]);

    const htmlLangs = { ja: 'ja', en: 'en', zh: 'zh-CN' };

    // 日本語原文をDOMから退避（jaに戻すときに使用）
    const originals = {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        originals[el.dataset.i18n] = el.innerHTML;
    });

    function setLanguage(lang) {
        const dict = lang === 'ja' ? originals : translations[lang];
        if (!dict) return;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.dataset.i18n;
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            } else if (originals[key] !== undefined) {
                el.innerHTML = originals[key];
            }
        });
        document.documentElement.lang = htmlLangs[lang] || 'ja';
        document.title = pageTitles[lang] || pageTitles.ja;
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        try {
            localStorage.setItem('site-lang', lang);
        } catch (e) { /* プライベートモード等では無視 */ }
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            setLanguage(btn.dataset.lang);
        });
    });

    // デフォルトは日本語（HTML原文のまま）。前回選択があれば復元する
    let saved = null;
    try {
        saved = localStorage.getItem('site-lang');
    } catch (e) { /* ignore */ }
    if (saved && saved !== 'ja' && translations[saved]) {
        setLanguage(saved);
    }
})();
