#author: Alexis Flores
#importing the high level api in order to make the call to walk the dev controller
#located in the communications building next to E2

#in order to make the calls, user must be connected tp UCSC DC VPN for net 2 access

from pysnmp.hlapi import *

#this functions walks the entire SNMP table and finds all the possible MIBs
#from this we can extract the information that we need

for (errorIndication,
     errorStatus,
     errorIndex,
     varBinds) in nextCmd(SnmpEngine(),
                          CommunityData('public'), #SNMP v2c, no encryption/auth
                          UdpTransportTarget(('noc-dmz-wlc.ucsc.edu', 161)), # insert ip or dns of host
                          ContextData(),
                          ObjectType(ObjectIdentity('SNMPv2-MIB'))): #enter object ID of data needed

    if errorIndication:
        print(errorIndication)
        break
    elif errorStatus:
        print('%s at %s' % (errorStatus.prettyPrint(),
                            errorIndex and varBinds[int(errorIndex) - 1][0] or '?'))
        break
    else:
        for varBind in varBinds:
            print(' = '.join([x.prettyPrint() for x in varBind]))
