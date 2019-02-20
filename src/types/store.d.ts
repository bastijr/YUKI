declare namespace Yagt {
  export interface SettingsState {
    localeChangers: TempLocaleChangerItem[];
  }

  type TempLocaleChangerItem = Yagt.Config.LocaleChangerItem & { id: string };

  export interface TextOutputObject extends TextThread {
    text: string;
  }

  export interface TextThread {
    handle: number;
    pid: number;
    addr: number;
    ctx: number;
    ctx2: number;
    name: string;
    code: string;
  }

  export interface Game {
    name: string;
    path: string;
    code: string;
    localeChanger: string;
  }
  export interface ConfigState {
    default: any;
    games: Game[];
  }

  export interface GuiState {
    noGame: boolean;
  }

  export interface TranslatorHookState {
    isMecabEnable: boolean;
    hookInfos: TextThread[];
    texts: {
      [handle: string]: string[];
    };
    patterns: {
      [handle: string]: Yagt.MeCabPatterns[];
    };
    currentDisplayHookIndex: number;
    translationsForCurrentIndex: Translations;
    toDisplayHookCode: string;
  }

  export interface TranslatorConfigState {
    default: any;
    game: Game;
    gui: {
      originalText: FontStyle;
      translationText: TranslationTextStyle;
      background: string;
    };
  }

  export interface FontStyle {
    fontSize: number;
    color: string;
  }

  export interface TranslationTextStyle extends FontStyle {
    margin: number;
  }

  export interface TranslatorViewState {
    isButtonsShown: boolean;
  }
}
