import React, { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import style from  './index.module.less'

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [secPageCon, setSenPageCon] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      clearTimeout(timer)
    }, 2000)
  }, [])

  return <View className={style.page}>
    {loading ? <View className={style.loading}>Loading</View> : <View className={`${style.container} ${style.slideIn}`} onAnimationEnd={() => {
      console.log('container--AnimationEnd')
    }}>
      <View className={style.firPage}>firstPage</View>
      <View className={`${style.secPage} ${style.slideIn}`} onAnimationEnd={() => {
        console.log('secPage--AnimationEnd')
      }}>
        secondPage
        <View className={`${style.secPageContenAni} ${secPageCon && style.slideIn}`} onAnimationEnd={() => {
          console.log('secPageContenAni--AnimationEnd')
        }} onClick={() => setSenPageCon(true)}>secondPage的动画</View>
        </View>
      <View className={style.thiPage}>thirdPage</View>
    </View>
    }
  </View>
}

export default Index