import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DriverFormScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      {/* Working Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.7}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* Header Section */}
      <View style={styles.headerRow}>
        <View style={styles.logoContainer}>
          {/* FIXED: Local assets must use require() instead of uri */}
          <Image 
            source={require('@/assets/images/7.png')} 
            style={styles.logoImage} 
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Get Started with{"\n"}JeevanSetu</Text>
          <Text style={styles.subtitle}>Complete your registration below</Text>
        </View>
      </View>

      {/* Full Name */}
      <View style={styles.inputWrapper}>
        <View style={styles.iconCircle}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/user.png' }} style={styles.inputIcon} />
        </View>
        <TextInput style={styles.input} placeholder="Full Name:" placeholderTextColor="#780b10" />
      </View>

      {/* Phone No */}
      <View style={styles.inputWrapper}>
        <View style={styles.iconCircle}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/phone.png' }} style={styles.inputIcon} />
        </View>
        <TextInput style={styles.input} placeholder="Phone No:" placeholderTextColor="#780b10" keyboardType="phone-pad" />
      </View>

      {/* Address */}
      <View style={styles.inputWrapper}>
        <View style={styles.iconCircle}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/marker.png' }} style={styles.inputIcon} />
        </View>
        <TextInput style={styles.input} placeholder="Address:" placeholderTextColor="#780b10" />
      </View>

      {/* Side-by-side City and State for Address */}
      <View style={styles.rowContainer}>
        <View style={[styles.inputWrapper, styles.halfInput]}>
          <TextInput style={styles.input} placeholder="city:" placeholderTextColor="#780b10" />
        </View>
        <View style={[styles.inputWrapper, styles.halfInput]}>
          <TextInput style={styles.input} placeholder="State:" placeholderTextColor="#780b10" />
        </View>
      </View>

      {/* Station Address */}
      <View style={styles.inputWrapper}>
        <View style={styles.iconCircle}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/marker.png' }} style={styles.inputIcon} />
        </View>
        <TextInput style={styles.input} placeholder="Station Address:" placeholderTextColor="#780b10" />
      </View>

      {/* Side-by-side City and State for Station Address */}
      <View style={styles.rowContainer}>
        <View style={[styles.inputWrapper, styles.halfInput]}>
          <TextInput style={styles.input} placeholder="city:" placeholderTextColor="#780b10" />
        </View>
        <View style={[styles.inputWrapper, styles.halfInput]}>
          <TextInput style={styles.input} placeholder="State:" placeholderTextColor="#780b10" />
        </View>
      </View>

      {/* Age */}
      <View style={styles.inputWrapper}>
        <View style={styles.iconCircle}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/calendar.png' }} style={styles.inputIcon} />
        </View>
        <TextInput style={styles.input} placeholder="Age:" placeholderTextColor="#780b10" keyboardType="numeric" />
      </View>

      {/* Adhar Card No */}
      <View style={styles.inputWrapper}>
        <View style={styles.iconCircle}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/bank-card-back-side.png' }} style={styles.inputIcon} />
        </View>
        <TextInput style={styles.input} placeholder="Adhar Card NO:" placeholderTextColor="#780b10" keyboardType="numeric" />
      </View>

      {/* Driving License No */}
      <View style={styles.inputWrapper}>
        <View style={styles.iconCircle}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.inputIcon} />
        </View>
        <TextInput style={styles.input} placeholder="Driving licence No:" placeholderTextColor="#780b10" />
      </View>

    {/* Submit Button */}
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6C8C9',
  },
  contentContainer: {
    paddingHorizontal: 22,
    paddingTop: 45,
    paddingBottom: 40,
  },
  backButton: {
    marginBottom: 10,
    width: 40,
  },
  backArrow: {
    fontSize: 28,
    color: '#000000',
    fontWeight: '700',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  logoContainer: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#780b10',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  logoImage: {
    width: 110,
    height: 110,
    tintColor: '#FFFFFF', // Ensures the icon image appears in pure white
    resizeMode: 'contain',
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#780b10',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 13,
    color: '#3A3031',
    marginTop: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingLeft: 8,
    paddingRight: 12,
    marginBottom: 12,
    height: 50,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3E1E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  inputIcon: {
    width: 16,
    height: 16,
    tintColor: '#780b10',
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#780b10',
    height: '100%',
  },
  photoText: {
    color: '#780b10',
    fontSize: 14,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  button: {
    backgroundColor: '#780b10',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});