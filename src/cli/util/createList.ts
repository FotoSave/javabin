import chalk from "chalk";

function drawSpaces(n: number) {
  const spaces = [];
  for (let i = 0; i < n; i++) {
    spaces.push(" ");
  }
  return spaces.join("");
}

export function clist(data: any | any[], tspaces?: number): string {
  const txt = [];

  const nspaces = tspaces || 0;

  if (Array.isArray(data)) {
    for (const f of data) {
      if (!Array.isArray(f) && typeof f != "object") {
        txt.push(
          drawSpaces(nspaces) + chalk.yellow("- ") + chalk.blueBright(f)
        );
      } else {
        txt.push(drawSpaces(nspaces) +"\n"+ clist(f, nspaces + 1));
      }
    }
  } else if(typeof data == "object") {
    for(const k of Object.keys(data)) {

        if(!Array.isArray(data[k]) && typeof data[k] != "object") {
            txt.push(drawSpaces(nspaces)+chalk.yellow("- ")+chalk.blackBright(k+": ")+chalk.blueBright(data[k]));
        } else {
            txt.push(drawSpaces(nspaces)+chalk.blackBright(k+": ")+"\n"+clist(data[k], nspaces+1));
        }

    }
  }
  
  return txt.join("\n");
}
