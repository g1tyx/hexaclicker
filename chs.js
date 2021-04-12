/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export to clipboard': '导出到剪贴板',
    'Export': '导出',
    'Import': '导入',
    'Donate': '捐赠',
    'Export Save': '导出存档',
    'Farm': '农场',
    'Hard reset': '硬复位',
    'Import Save': '导入存档',
    'Progress': '进度',
    'Selected': '已选择',
    'Utility': '增益',
    'Activate': '激活',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '[Passive] +10% Area DPS': '[被动]+10%的区域DPS',
    '[Active] +50% DPS Horizontally': '[激活]水平方向增加50% DPS',
    '[Active] +50% Area DPS': '[激活]+50%的区域DPS',
    'You enable automatic level change by selecting Progress mode and disable it by selecting Farm mode.': '您可以通过选择进度模式启用自动升级，并通过选择农场模式禁用它。',
    'You can unlock more slots by reaching lvl 30 and lvl 60.': '你可以在达到30级和60级时解锁更多的插槽。',
    'Select the slot on the grid to upgrade/activate the hexa.': '选择网格上的插槽来升级/激活六边形。',
    'Select the hexa you want to buy on the left, then select the slot where you want to place it.': '在左边选择你想买的六边形，然后选择你想放置它的槽位。',
    'Press Shift + Left-click to upgrade the hexa': '按Shift +左键升级六边形',
    'Press CTRL + Left-click to activate the utility hexa': '按CTRL + 左键点击 激活增益六边形',
    'Every utility hexa costs 1 point. You receive utility points every 10 levels': '每个效用六边形成本1点。 您每10级获得一次增益点数',
    'Click on the + hexa to deal dmg.': '单击 + 六边形 来造成伤害。',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Create New Grid - Required level: ": "创建新网格-所需级别：",
    "Grid: ": "网格: ",
    "Kills: ": "击杀: ",
    "Lvl ": "等级 ",
    "Price: ": "价格: ",
    "Sell ": "出售 ",
    "Upgrade: ": "升级: ",
    "Next lvl DPS: ": "下一级DPS: ",
    "Current DPS: ": "当前DPS: ",
    "Upgrade ": "升级 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^\s*$/, //纯空格
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);