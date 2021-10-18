package main

import (
	"cmall-go/conf"
	"cmall-go/server"
)

func main() {
	// 从配置文件读取配置
	conf.Init()
	r := server.NewRouter()
	r.Run(":3001")
}