import { Preset } from 'apply';

Preset.setName('starterkit-preset');

Preset.apply('Leftium/gitattributes-preset');
Preset.apply('Leftium/vscode-preset');
Preset.apply('Leftium/coffeescript-adder');
Preset.apply('Leftium/pug-adder');
Preset.apply('Leftium/netlify-adapter-adder');

Preset.instruct(`Run ${color.magenta("npm install")}, ${color.magenta("pnpm install")}, or ${color.magenta("yarn")} to install dependencies`);

