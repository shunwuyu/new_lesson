import superagent from "superagent";
import fs from "fs";
import path from "path";
import UrlAnalyzer from "./urlAnalyzer";

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, "../data/url.json");

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }
  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
  constructor(private analyzer: Analyzer, private url: string) {
    this.initSpiderProcess();
  }
}

const url = "https://movie.douban.com/top250";
const analyzer = new UrlAnalyzer();
new Crowller(analyzer, url);