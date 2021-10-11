package conf

import (
	"github.com/joho/godotenv"
	"cmall-go/model"
	"os"
)

func Init() {
	// 从本地读取环境变量
	godotenv.Load()
	// fmt.Println(os.Getenv("MYSQL_DSN"))
	if err := LoadLocales("conf/locales/zh-cn.yaml"); err != nil {
		panic(err)
	}
	model.Database(os.Getenv("MYSQL_DSN"))
}