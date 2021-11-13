# notranslate for code

## The Repository

Avoid translating the source code portion of a web page.

## Feature

- Do not translate source code
- Translation of commented out in source code

## Usage

1. Clone this repository. HTTPS or SSH
```terminal
% git clone https://github.com/ryo-kihara/notranslate.git
or
% git clone git@github.com:ryo-kihara/notranslate.git
```

2. Install your local and TypeScript build. It will be built automatically at postinstall.
```terminal
% npm install
```

3. Move **chrome://extensions/**

![chrome://extensions/](https://user-images.githubusercontent.com/48352529/141610767-4d579eb2-674b-44a3-8165-6ec77b9a6f48.png)

4. Switch Developper mode and click "パッケージ化されていない拡張機能を読み込む"

![Developper mode](https://user-images.githubusercontent.com/48352529/141610988-d5aa3719-fed8-4b4c-a046-4d7203803e08.png)

5. Select the `/public` directory for this repository.

![select directory](https://user-images.githubusercontent.com/48352529/141611039-e55b2ba3-a7a7-438a-bc38-cc0b88d5caea.png)

6. Try translating this page.

```ts
interface NOTranselate {
  not: string
  translate: string
}

console.log('Hello.')
const translate: NOTranselate = { not: 'not', translate: 'translate' }
const transfer = false
```
