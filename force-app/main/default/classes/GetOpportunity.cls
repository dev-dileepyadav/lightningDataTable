public with sharing class GetOpportunity {
   
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(){
        return [SELECT Id, Amount, Name, CloseDate, StageName FROM Opportunity];
    }

    @AuraEnabled
    public static String updateOpportunity(List<object> opportunityData){
        List<opportunity> oppList = (List<opportunity>)JSON.deserialize(JSON.serialize(opportunityData),List<Opportunity>.class);
        
        if(!oppList.isEmpty() && oppList.size() > 0){
            update oppList;
            return 'Saved';
        }
        return 'Can not save';
    }
}