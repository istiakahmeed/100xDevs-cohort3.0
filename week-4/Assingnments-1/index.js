import { Command } from "commander";
import fs from "fs";

const program = new Command();

program.name("counter").description("CLI to do based tasks").version("1.0.0");

program
  .command("count")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
      } else {
        const line = data.split("\n").length;
        console.log(line);
      }
    });
  });

program.parse();
