const heroGraphic_1 = new Proxy({"src":"/_astro/hero-graphics-1.DXZ7MFmt.png","width":1698,"height":955,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/hero/hero-graphics-1.png";
							}
							
							return target[name];
						}
					});

export { heroGraphic_1 as h };
