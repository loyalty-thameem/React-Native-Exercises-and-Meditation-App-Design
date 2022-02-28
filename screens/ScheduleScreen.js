import * as React from 'react';
import { View, Text, Button,Icon, Image,ScrollView,StyleSheet,Dimensions,SafeAreaView } from 'react-native';
import Category from '../components/Category'
import Category2 from '../components/Category2'

const image=[
  'https://www.fitnessfirst.com.ph/-/media/project/evolution-wellness/fitness-first/south-east-asia/philippines/membership/myfit/myfit-join-online-hero-banner-main-ph1.jpg',
  'https://cdn.dribbble.com/users/4201251/screenshots/9691910/image.png',

  'https://www.fastinfoclass.com/images/Yoga-banner-Recovered.jpg',

]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
 const ScheduleScreen = () => {
  const [imgActive,setImgActive] = React.useState(0);

  const onchange=(nativeEvent)=>{
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive){
        setImgActive(slide)
      }
    }
  }
  return (
       <SafeAreaView style={styles.container}>
    <View style={styles.wrap}>
    <ScrollView
                 onScroll={({nativeEvent})=>onchange(nativeEvent)}
                 showsHorizontalScrollIndicator={false} 
                 pagingEnabled
                 horizontal
                 style={styles.wrap}>
                                     {
                                       image.map((e,index)=>
    <Image
                                       key={e}
                                       resizeMode='stretch'
                                       style={styles.wrap}
                                       source={{uri:e}}
    />
                                       )
                                     }
    </ScrollView>         
    <View 
          style={styles.wrapDot}>{
            image.map((e,index)=>
            <Text key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}>●
    </Text>)
          }
    
    </View>
           

    </View>
    
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 10 }}>
                            <Text style={{ fontSize: 24, fontWeight: '600', paddingHorizontal: 20 }}>
                                Workout
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/images/workout.jpg')}
                                        name="S&C" duration=" 1hour"
                                    />
                                    <Category imageUri={require('../assets/images/workout2.jpg')}
                                        name="Yoga" duration=" 3hours"
                                    />
                                    <Category imageUri={require('../assets/images/workout3.jpg')}
                                        name="Meditation" duration="1min"
                                    />
                                     <Category imageUri={require('../assets/images/workout4.jpg')}
                                        name="Cardio" duration=" 15mins"
                                    />
                                </ScrollView>
                            </View>


                           
    </View>

 
     <View style={{ marginTop: 150, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 17, fontWeight: '500' }}>
                                   OUR HEALTH CLUBS
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                   Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.

                                </Text>
                                                                <ScrollView
                                    horizontal={false}
                                    showsHorizontalScrollIndicator={false}

                                >
                                <View style={{ width: WIDTH - 40, height: 200, marginTop: 20 }}>

                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/images/workout5.jpg')}
                                    /> 
                                    
                                </View>
                               
                                </ScrollView>
                                
      
    </View>
    </SafeAreaView>

  );
}
export default ScheduleScreen
const styles = StyleSheet.create({
  container:{
       flex:1,
  },
  wrap:{
    width:WIDTH,
    height:HEIGHT*0.25, 
  },
  wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
  },
  dotActive:{
    margin:3,
    color:'black'
  },
  dot:{
    margin:3,
    color:'#ffff'
  }

})