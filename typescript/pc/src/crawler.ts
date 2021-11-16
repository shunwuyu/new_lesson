import superagent from "superagent";
import cheerio from "cheerio";
import fs from "fs";
import path from "path";

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

class Crawler {
  private url = "https://movie.douban.com/top250";

  getJsonInfo(html: string) {
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

  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  getJsonContent(info: InfoResult) {
    const filePath = path.resolve(__dirname, "./data/url.json");
    let fileContent: objJson = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[info.time] = info.data;
    fs.writeFileSync(filePath, JSON.stringify(fileContent));
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const info = this.getJsonInfo(html);
    this.getJsonContent(info);
  }

  constructor() {
    this.initSpiderProcess();
  }
}

const crawler = new Crawler();