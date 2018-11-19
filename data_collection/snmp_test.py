#author: Alexis Flores
#example script of an example host to query
# using localhost for this example
# to test on real network device, just insert ip address of device

from pysnmp.hlapi import *
from twisted.internet import task
from twisted.internet import reactor
import logging


def get_snmp_proc(): # gets information from device of interest
    errorIndication, errorStatus, errorIndex, varBinds = next(
        getCmd(SnmpEngine(),
               CommunityData('public', mpModel=0), #SNMP v1, no encryption/auth
               UdpTransportTarget(('127.0.0.1', 161)), #ip address of host and snmp port
               ContextData(),
               ObjectType(ObjectIdentity('SNMPv2-MIB', 'sysName', 0)), # get host name
               ObjectType(ObjectIdentity('TCP-MIB', 'tcpCurrEstab', 0)), #current tcp conn
               ObjectType(ObjectIdentity('HOST-RESOURCES-MIB', 'hrSystemNumUsers', 0)), #MIB and OID, num users
               ObjectType(ObjectIdentity('HOST-RESOURCES-MIB', 'hrSystemProcesses', 0))) #MIB and OID, curr proc
    )
    
    if errorIndication: #error checking
        print(errorIndication)
    elif errorStatus:
        print('%s at %s' % (errorStatus.prettyPrint(),
                            errorIndex and varBinds[int(errorIndex) - 1][0] or '?'))

    
    else: #return information as a readable string

        varbind_list = [] 
        for varBind in varBinds:
            #print(' = '.join([x.prettyPrint() for x in varBind]))
            varbind_list.append(' = '.join([x.prettyPrint() for x in varBind]))


    return varbind_list



#need function that splits returned value and keeps the int value of the OID returned
def var_string_slice(var_list):
    for x in var_list:
        print("\nThis is the value returned ", x)

#need function that sends the returned value to a database


def snmp_format_returned():
    get_snmp_data = get_snmp_proc()
    print("\n\nSNMP data returned\n\n")
    var_string_slice(get_snmp_data)


#automated the script to run every n seconds
def main():

    l = task.LoopingCall(snmp_format_returned)
    l.start(10) # call every 10 seconds

    reactor.run()

if __name__ == '__main__':
    main()