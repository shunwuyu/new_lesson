import cheerio from "cheerio";
import fs from "fs";
import { Analyzer } from "./crawler";

interface objJson {
  [propName: number]: Info[];
}

interface Info {
  title: string;
  url: string;
  pic: string;
}

interface InfoResult {
  time: number;
  data: Info[];
}
export default class UrlAnalyzer implements Analyzer {
  static instance: UrlAnalyzer;

  static getInstance() {
    if (!UrlAnalyzer.instance) {
      UrlAnalyzer.instance = new UrlAnalyzer();
    }
    return UrlAnalyzer.instance;
  }
  private getJsonInfo(html: string) {
    const $ = cheerio.load(html);
    const info: Info[] = [];
    const movies = $(".grid_view .item");
    for (let i = 0; i < movies.length; i++) {
      let movie = movies[i];
      let pic:string = String($(movie).find('.pic img').attr('src'));
      // console.log(pic);
      let title:string = String($(movie).find('.info .title:first-child').text());
      let url:string = String($(movie).find('.info a').attr('href'));
      
      info.push({
        title,
        url,
        pic
      });
    }
    const result = {
      time: new Date().getTime(),
      data: info,
    };
    return result;
  }

  private getJsonContent(info: InfoResult, filePath: string) {
    let fileContent: objJson = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[info.time] = info.data;
    return fileContent;
  }

  public analyze(html: string, filePath: string) {
     const info = this.getJsonInfo(html);
     console.log(info);
    const fileContent = this.getJsonContent(info, filePath);
    return JSON.stringify(fileContent);
  }

  private constructor() {}
}