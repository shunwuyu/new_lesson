package conf

import (
	"io/ioutil"
	yaml "gopkg.in/yaml.v2"
)

var Dictinary *map[interface{}]interface{}

func LoadLocales(path string) error {
	data, err := ioutil.ReadFile(path)
	if err != nil { // 文件错误
		return err
	}
	// fmt.Println(data)

	m := make(map[interface{}]interface{})
	err = yaml.Unmarshal([]byte(data), &m)
	// fmt.Println(m)
	if err != nil {
		return err
	}
	Dictinary = &m
	return nil
}