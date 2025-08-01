import { Link } from 'expo-router';
import { ScrollView, View, Text, Pressable } from 'react-native';
import Header from '@/components/Header';
import Feather from '@expo/vector-icons/Feather';
import '../global.css';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import useThemeColors from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home() {
    const insets = useSafeAreaInsets();

    return (
        <>
            <Header hasAvatar />
            <ScrollView style={{ paddingTop: insets.top + 80 }} className='px-5 pt-10  bg-light-primary dark:bg-dark-primary'>
                <View className='mb-14 mt-10'>
                    <Text className='text-4xl font-bold dark:text-white'>Hello there!</Text>
                    <Text className='text-neutral-600 dark:text-neutral-400 text-lg'>Welcome to my playground</Text>
                </View>
                <LinkItem href='/screens/whatsapp' icon='whatsapp' title='Whatsapp' description='Swipe to talk [new] feature' />

               
            </ScrollView>
        </>
    );
}

const LinkItem = (props: any) => {
    const colors = useThemeColors();
    return (
        <Link href={props.href} asChild>
            <Pressable
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
                className='flex-row items-center bg-white dark:bg-dark-secondary rounded-xl px-5 py-4 mb-2'>
                <FontAwesome5 name={props.icon} size={20} color={colors.icon} />
                <View className='justify-center ml-4'>
                    <View className='flex-row items-center'>
                        <Text className='text-base font-bold dark:text-white'>{props.title}</Text>
                        {props.comingSoon &&
                        <View className='bg-sky-500 rounded-full px-2 py-[3px] ml-2'>
                            <Text className='text-xs text-white'>Soon</Text>
                        </View>
                        }
                    </View>
                    <Text className='text-sm text-neutral-500 dark:text-neutral-400'>{props.description}</Text>
                </View>
                <View className='ml-auto opacity-30'>
                    <Feather name='chevron-right' size={20} color={colors.icon} />
                </View>
            </Pressable>
        </Link>
    )
}