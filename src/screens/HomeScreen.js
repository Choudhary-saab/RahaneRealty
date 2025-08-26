import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [selectedType, setSelectedType] = useState('Residential');
  const [selectedCity, setSelectedCity] = useState('All');

  const propertyTypes = ['Residential', 'Commercial', 'Plot/Land', 'Rental'];
  const cities = ['All', 'Noida', 'Gurgaon', 'Delhi', 'Greater Noida'];

  return (
    <SafeAreaView style={styles.container}>
      {/* Blue Header */}
      <View style={styles.header}>
        <View style={styles.topRow}>
          {/* Rahane Realty Logo */}
          <View style={styles.logoContainer}>
            <Image
                                              source={require('../../assets/images/Avatar_image.png')}
                                              style={styles.logo}
                                              resizeMode="contain"
                                            />
          </View>
          
          {/* Notification Bell */}
          <TouchableOpacity 
            style={styles.notificationIcon}
            onPress={() => navigation.navigate('NotificationScreen')}
          >
            <View style={styles.bellContainer}>
              <View style={styles.bellShape} />
              <View style={styles.bellTop} />
              <View style={styles.notificationDot} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Property Type Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
        >
          {propertyTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tab,
                selectedType === type && styles.selectedTab
              ]}
              onPress={() => setSelectedType(type)}
            >
              <View style={styles.tabIconContainer}>
                <View style={styles.houseIcon}>
                  <View style={styles.houseBase} />
                  <View style={styles.houseRoof} />
                </View>
              </View>
              <Text style={[
                styles.tabText,
                selectedType === type && styles.selectedTabText
              ]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={styles.searchIconContainer}>
              <View style={styles.searchGlass} />
              <View style={styles.searchHandle} />
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Property"
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#999999"
            />
            <TouchableOpacity 
              style={styles.filterIconContainer}
              onPress={() => navigation.navigate('FilterScreen')}
            >
              <View style={styles.filterIcon}>
                <View style={styles.filterLine1} />
                <View style={styles.filterLine2} />
                <View style={styles.filterLine3} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.micButton}>
            <View style={styles.micIcon}>
              <View style={styles.micBase} />
              <View style={styles.micTop} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner with Background Image */}
<View style={styles.bannerContainer}>
  <ImageBackground 
    source={require('../../assets/images/In-App_Banner_Vi03.png')}
    style={styles.banner}
    imageStyle={styles.bannerBackgroundImage}
  >
    <View style={styles.bannerContent}>
      <Text style={styles.bannerTitle}>List Your Property Today!</Text>
      <Text style={styles.bannerSubtitle}>
        Reach buyers faster. Upload details, photos & go live in minutes.
      </Text>
      <TouchableOpacity style={styles.listNowButton}>
        <Text style={styles.listNowText}>List Now</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
</View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Top Selling Projects in India</Text>

        {/* City Filter Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.cityTabs}
        >
          {cities.map((city, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.cityTab,
                selectedCity === city && styles.selectedCityTab
              ]}
              onPress={() => setSelectedCity(city)}
            >
              <Text style={[
                styles.cityTabText,
                selectedCity === city && styles.selectedCityTabText
              ]}>
                {city}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Property Cards */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.propertyList}
        >
          {[1, 2, 3].map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.propertyCard}
              onPress={() => navigation.navigate('PropertyDetailsScreen')}
            >
              <View style={styles.propertyImage}>
                <TouchableOpacity 
                  style={styles.favoriteIcon}
                  onPress={() => navigation.navigate('SavedScreen')}
                >
                  <View style={styles.heartIcon}>
                    <View style={styles.heartLeft} />
                    <View style={styles.heartRight} />
                    <View style={styles.heartBottom} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.propertyInfo}>
                <Text style={styles.propertyTitle}>Godrej Project</Text>
                <Text style={styles.propertyLocation}>Sector 150, Noida</Text>
                <Text style={styles.propertyPrice}>₹ 65 Lakh - 1.2 Cr</Text>
                <Text style={styles.propertySpecs}>3-4 BHK • Ready to Move</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.homeNavIcon}>
            <View style={styles.homeBase} />
            <View style={styles.homeRoof} />
          </View>
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.toolsNavIcon}>
            <View style={styles.toolsRect1} />
            <View style={styles.toolsRect2} />
          </View>
          <Text style={styles.navText}>Tools</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('SavedScreen')}
        >
          <View style={styles.saveNavIcon}>
            <View style={styles.saveHeart} />
          </View>
          <Text style={styles.navText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <View style={styles.profileNavIcon}>
            <View style={styles.profileHead} />
            <View style={styles.profileBody} />
          </View>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#2B4A91',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  // Rahane Realty Logo
  logoContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    width: 32,
    height: 32,
    position: 'relative',
  },
  diamond: {
    position: 'absolute',
    width: 4,
    height: 4,
    backgroundColor: '#2B4A91',
    transform: [{ rotate: '45deg' }],
  },
  diamond1: { top: 4, left: 14 },
  diamond2: { top: 8, left: 10 },
  diamond3: { top: 8, left: 14 },
  diamond4: { top: 8, left: 18 },
  diamond5: { top: 12, left: 10 },
  diamond6: { top: 12, left: 14 },
  diamond7: { top: 12, left: 18 },
  diamond8: { top: 16, left: 14 },
  diamond9: { top: 20, left: 14, width: 6, height: 6 },

  // Notification Bell
  notificationIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellContainer: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  bellShape: {
    width: 16,
    height: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    position: 'absolute',
    top: 2,
    left: 2,
  },
  bellTop: {
    width: 4,
    height: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    position: 'absolute',
    top: 0,
    left: 8,
  },
  notificationDot: {
    width: 6,
    height: 6,
    backgroundColor: '#FF4444',
    borderRadius: 3,
    position: 'absolute',
    top: 0,
    right: 0,
  },

  // Property Type Tabs
  tabsContainer: {
    marginBottom: 20,
  },
  tab: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: '#FFFFFF',
  },
  tabIconContainer: {
    marginRight: 6,
  },
  houseIcon: {
    width: 14,
    height: 14,
    position: 'relative',
  },
  houseBase: {
    width: 10,
    height: 8,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 2,
  },
  houseRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedTabText: {
    color: '#2B4A91',
  },

  // Search Bar
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginRight: 10,
  },
  searchIconContainer: {
    marginRight: 10,
  },
  searchGlass: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: '#999999',
    borderRadius: 6,
  },
  searchHandle: {
    width: 6,
    height: 2,
    backgroundColor: '#999999',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    bottom: -1,
    right: -1,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  filterIconContainer: {
    padding: 5,
  },
  filterIcon: {
    width: 16,
    height: 16,
    justifyContent: 'space-between',
  },
  filterLine1: {
    width: 16,
    height: 2,
    backgroundColor: '#2B4A91',
    borderRadius: 1,
  },
  filterLine2: {
    width: 12,
    height: 2,
    backgroundColor: '#2B4A91',
    borderRadius: 1,
    alignSelf: 'center',
  },
  filterLine3: {
    width: 8,
    height: 2,
    backgroundColor: '#2B4A91',
    borderRadius: 1,
    alignSelf: 'flex-end',
  },
  micButton: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  micIcon: {
    width: 18,
    height: 18,
    position: 'relative',
  },
  micBase: {
    width: 8,
    height: 12,
    backgroundColor: '#2B4A91',
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    left: 5,
  },
  micTop: {
    width: 12,
    height: 4,
    backgroundColor: '#2B4A91',
    borderRadius: 2,
    position: 'absolute',
    bottom: 0,
    left: 3,
  },

  // Beautiful City Banner
  bannerContainer: {
  paddingHorizontal: 20,
  paddingVertical: 20,
},
banner: {
  borderRadius: 20,
  padding: 20,
  overflow: 'hidden',
  position: 'relative',
  height: 140,
  justifyContent: 'center',
},
bannerBackgroundImage: {
  borderRadius: 20,
},
bannerContent: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(168, 213, 255, 0.9)', // Semi-transparent overlay
  borderRadius: 15,
  padding: 20,
  maxWidth: '70%',
},
bannerTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#1B365D',
  marginBottom: 8,
},
bannerSubtitle: {
  fontSize: 13,
  color: '#4A6B8A',
  marginBottom: 15,
  lineHeight: 18,
},
listNowButton: {
  backgroundColor: '#FFFFFF',
  paddingHorizontal: 20,
  paddingVertical: 12,
  borderRadius: 20,
  alignSelf: 'flex-start',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},
listNowText: {
  color: '#1B365D',
  fontWeight: '600',
  fontSize: 14,
},
  // Complex City Illustration
  bannerIllustration: {
    width: 140,
    height: 120,
    position: 'relative',
  },
  gradientCircle1: {
    position: 'absolute',
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 40,
    top: -20,
    right: 20,
  },
  gradientCircle2: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 30,
    top: 10,
    right: -10,
  },
  building1: {
    position: 'absolute',
    width: 22,
    height: 60,
    backgroundColor: '#2E5BBA',
    borderRadius: 3,
    top: 40,
    left: 15,
  },
  building1Windows: {
    position: 'absolute',
    width: 3,
    height: 8,
    backgroundColor: '#5A7FD3',
    borderRadius: 1,
    top: 48,
    left: 19,
  },
  building2: {
    position: 'absolute',
    width: 26,
    height: 75,
    backgroundColor: '#4A73D1',
    borderRadius: 3,
    top: 25,
    left: 40,
  },
  building2Windows1: {
    position: 'absolute',
    width: 4,
    height: 6,
    backgroundColor: '#6B8FE0',
    borderRadius: 1,
    top: 35,
    left: 45,
  },
  building2Windows2: {
    position: 'absolute',
    width: 4,
    height: 6,
    backgroundColor: '#6B8FE0',
    borderRadius: 1,
    top: 50,
    left: 55,
  },
  building3: {
    position: 'absolute',
    width: 20,
    height: 45,
    backgroundColor: '#1B4899',
    borderRadius: 3,
    top: 55,
    left: 70,
  },
  building4: {
    position: 'absolute',
    width: 18,
    height: 35,
    backgroundColor: '#8FA7E8',
    borderRadius: 3,
    top: 65,
    left: 95,
  },
  skyscraper1: {
    position: 'absolute',
    width: 14,
    height: 85,
    backgroundColor: '#2E5BBA',
    borderRadius: 2,
    top: 15,
    left: 25,
  },
  skyscraper2: {
    position: 'absolute',
    width: 16,
    height: 95,
    backgroundColor: '#4A73D1',
    borderRadius: 2,
    top: 5,
    left: 55,
  },
  modernBuilding1: {
    position: 'absolute',
    width: 24,
    height: 50,
    backgroundColor: '#B5C9F2',
    borderRadius: 4,
    top: 50,
    left: 85,
  },
  modernBuilding1Detail: {
    position: 'absolute',
    width: 20,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    top: 60,
    left: 87,
  },
  modernBuilding2: {
    position: 'absolute',
    width: 20,
    height: 40,
    backgroundColor: '#7B99E3',
    borderRadius: 3,
    top: 60,
    left: 112,
  },
  house1: {
    position: 'absolute',
    width: 16,
    height: 25,
    backgroundColor: '#D1E0F7',
    borderRadius: 2,
    top: 75,
    left: 5,
  },
  house1Roof: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#4A73D1',
    top: 67,
    left: 5,
  },
  house2: {
    position: 'absolute',
    width: 14,
    height: 20,
    backgroundColor: '#E8F1FC',
    borderRadius: 2,
    top: 80,
    left: 125,
  },
  cloud1: {
    position: 'absolute',
    width: 20,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    top: 15,
    left: 10,
  },
  cloud2: {
    position: 'absolute',
    width: 16,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 6,
    top: 25,
    left: 70,
  },
  cloud3: {
    position: 'absolute',
    width: 18,
    height: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 7,
    top: 20,
    left: 110,
  },
  cloud4: {
    position: 'absolute',
    width: 14,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    top: 35,
    left: 125,
  },

  // Content
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  cityTabs: {
    marginBottom: 20,
  },
  cityTab: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCityTab: {
    backgroundColor: '#2B4A91',
  },
  cityTabText: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedCityTabText: {
    color: '#FFFFFF',
  },
  propertyList: {
    marginBottom: 20,
  },
  propertyCard: {
    width: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  propertyImage: {
    height: 140,
    backgroundColor: '#D4B895',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
  },
  favoriteIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  heartIcon: {
    width: 16,
    height: 16,
    position: 'relative',
  },
  heartLeft: {
    width: 8,
    height: 8,
    backgroundColor: '#999999',
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  heartRight: {
    width: 8,
    height: 8,
    backgroundColor: '#999999',
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  heartBottom: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#999999',
    position: 'absolute',
    bottom: -2,
    left: 0,
  },
  propertyInfo: {
    padding: 15,
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  propertyLocation: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  propertyPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2B4A91',
    marginBottom: 5,
  },
  propertySpecs: {
    fontSize: 12,
    color: '#999999',
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  homeNavIcon: {
    width: 20,
    height: 20,
    position: 'relative',
    marginBottom: 5,
  },
  homeBase: {
    width: 14,
    height: 10,
    backgroundColor: '#2B4A91',
    position: 'absolute',
    bottom: 0,
    left: 3,
  },
  homeRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#2B4A91',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  toolsNavIcon: {
    width: 20,
    height: 20,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  toolsRect1: {
    width: 20,
    height: 8,
    backgroundColor: '#666666',
    borderRadius: 2,
  },
  toolsRect2: {
    width: 20,
    height: 8,
    backgroundColor: '#666666',
    borderRadius: 2,
  },
  saveNavIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  saveHeart: {
    width: 16,
    height: 14,
    backgroundColor: '#666666',
    borderRadius: 8,
  },
  profileNavIcon: {
    width: 20,
    height: 20,
    position: 'relative',
    marginBottom: 5,
  },
  profileHead: {
    width: 8,
    height: 8,
    backgroundColor: '#666666',
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    left: 6,
  },
  profileBody: {
    width: 16,
    height: 10,
    backgroundColor: '#666666',
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    left: 2,
  },
  navText: {
    fontSize: 12,
    color: '#666666',
  },
  activeNavText: {
    color: '#2B4A91',
    fontWeight: '600',
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#5B7CE8',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#5B7CE8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
