// app/(tabs)/profile.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { useAuth } from '@/auth/AuthContext';

export default function ProfileScreen() {
  const { user } = useAuth();

  const handleWalletConnect = () => {
    //Placeholder for walletconnect or metamask mobile
    alert('Wallet connection coming soon...');
  };

  // Sample proposal data
  const proposals = [
    {
      id: 1,
      title: 'Hydrophonic Farm Project',
      description: 'Formulation of hydrophonic farms on vacant land parcels',
      actionText: 'View Project',
      status: 'Voting Open'
    },
    {
      id: 2,
      title: 'Opening of a physical community store',
      actionText: 'View Details',
      status: 'Funding Phase'
    },
    {
      id: 3,
      title: 'Butcher Boy Purchase',
      description: 'Funding for purchasing a Butcher Boy equipment',
      actionText: 'Vote Now',
      status: 'Active Voting'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile & Dashboard</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: `https://ui-avatars.com/api/?name=${user.email?.charAt(0).toUpperCase() || 'U'}&background=4D571D&color=fff&bold=true`,
            }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
              <Text style={styles.userName}>{user?.name || 'Community Member'}</Text>
              <Text style={styles.email}>{user?.email}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.walletButton} onPress={handleWalletConnect}>
            <FontAwesome name="connectdevelop" size={20} color="white" />
            <Text style={styles.walletButtonText}>Connect Wallet</Text>
          </TouchableOpacity>
      </View>

      {/* Stats Section*/}
      <Text style={styles.sectionTitle}>Community Statistics</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statsGrid}>
          <Ionicons name="wallet-outline" size={28} color="#4D571D" />
          <Text style={styles.statValue}>R 250.00</Text>
          <Text style={styles.statLabel}>Stokvel Value</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="people-outline" size={28} color="#4D571D" />
          <Text style={styles.statValue}>4</Text>
          <Text style={styles.statLabel}>Members</Text>
        </View>

        <View style={styles.statCard}>
          <MaterialIcons name="pets" size={28} color="#4D571D" />
          <Text style={styles.statValue}>6</Text>
          <Text style={styles.statLabel}>Livestock</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="earth-outline" size={28} color="#4D571D" />
          <Text style={styles.statValue}>4</Text>
          <Text style={styles.statLabel}>Land Parcels</Text>
        </View>
      </View>

      {/* Upcoming Projects & Events */}
      <Text style={styles.sectionTitle}>Upcoming Projects</Text>
      <View style={styles.projectCard}>
        <View style={styles.projectHeader}>
          <MaterialIcons name="event" size={20} color="#6A5026" />
          <Text style={styles.projectTitle}>Sow Delivery</Text>
        </View>
        <Text style={styles.projectDate}>Starting: Oct 15, 2025</Text>
        <Text style={styles.projectDesc}>New livestock delivery for DAO group Alpha</Text>
      </View>

      {/* Proposal Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Active Proposals</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {proposals.map((proposal) => (
        <View key={proposal.id} style={styles.proposalCard}>
          <View style={styles.proposalHeader}>
            <Text style={styles.proposalTitle}>{proposal.title}</Text>
            <View style={[styles.statusBadge, { backgroundColor: proposal.status.includes('Voting') ? '#E1F0D4' : '#FFE6CC' }]}>
              <Text style={[styles.statusText, { color: proposal.status.includes('Voting') ? '#4A8C2F' : '#CC6600' }]}>
                {proposal.status}
              </Text>
            </View>
          </View>
          <Text style={styles.proposalDesc}>{proposal.description}</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>{proposal.actionText}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9F6',
  },
  header: {
    backgroundColor: '#4D571D',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    margin: 20,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#4D571D',
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  walletButton: {
    flexDirection: 'row',
    backgroundColor: '#4D571D',
    padding: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  walletButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
  },
  viewAll: {
    color: '#4D571D',
    fontWeight: '600',
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: 'white',
    width: '48%',
    borderRadius: 14,
    padding: 18,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4D571D',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2C3E50',
  },
  projectDate: {
    fontSize: 14,
    color: '#4D571D',
    fontWeight: '500',
    marginBottom: 8,
  },
  projectDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  proposalCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  proposalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  proposalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    flex: 1,
  },
  statusBadge: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  proposalDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  actionButton: {
    backgroundColor: '#6A5026',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});
