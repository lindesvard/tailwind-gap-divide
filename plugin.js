const plugin = require("tailwindcss/plugin");

function flattenTailwindColors(obj) {
	return Object.keys(obj).reduce((acc, key) => {
		const current = obj[key];
		if (!current) {
			return acc;
		}
		if (typeof current === "string") {
			acc[key] = current;
		} else {
			for (const [colorNumber, colorValue] of Object.entries(current)) {
				if (colorNumber === "DEFAULT") {
					acc[key] = colorValue;
				} else {
					acc[`${key}-${colorNumber}`] = colorValue;
				}
			}
		}
		return acc;
	}, {});
}

module.exports = plugin(({ matchUtilities, theme }) => {
	matchUtilities(
		{
			"gap-divide-y": (value) => ({
				"& > *": {
					paddingTop: value,
					paddingBottom: value,
					borderBottomWidth: "1px",
					borderColor: theme("colors.border"),
				},
				"& > *:first-child": {
					paddingTop: "0",
				},
				"& > *:last-child": {
					paddingBottom: "0",
					borderBottomWidth: "0",
				},
			}),
			"gap-divide-x": (value) => ({
				"& > *": {
					paddingLeft: value,
					paddingRight: value,
					borderRightWidth: "1px",
					borderColor: theme("colors.border"),
				},
				"& > *:first-child": {
					paddingLeft: "0",
				},
				"& > *:last-child": {
					paddingRight: "0",
					borderRight: "0",
				},
			}),
		},
		{
			values: theme("spacing"),
			type: "length",
		},
	);

	matchUtilities(
		{
			"gap-divide": (value) => ({
				"& > *": {
					borderColor: value,
				},
			}),
		},
		{
			values: flattenTailwindColors(theme("colors")),
			type: "color",
		},
	);
});
