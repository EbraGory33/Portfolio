// import { codeToHtml } from "shiki";

// interface CodeContentProps {
//   code: string;
//   lang: string;
// }

// export async function CodeContent({ code, lang }: CodeContentProps) {
//   const html = await codeToHtml(code, {
//     lang,
//     theme: "github-dark",
//     colorReplacements: {
//       "#24292e": "transparent",
//       fff: "transparent",
//     },
//   });

//   return (
//     <div
//       className="overflow-x-auto px-4 py-4 text-sm leading-relaxed"
//       dangerouslySetInnerHTML={{
//         __html: html,
//       }}
//     />
//   );
// }

import { codeToHtml } from "shiki";

interface CodeContentProps {
  code: string;
  lang: string;
}

export async function CodeContent({ code, lang }: CodeContentProps) {
  const html = await codeToHtml(code, {
    lang,

    themes: {
      light: "min-light",
      dark: "nord",
    },
    defaultColor: false,
  });

  return (
    <div
      className="shiki shiki-themes overflow-x-auto px-4 pt-11 pb-3 font-mono text-sm leading-6 dark:bg-[#101010]"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
