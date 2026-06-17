import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronDown, Power, Save } from 'lucide-react';
import ConfigTab from './ConfigTab';
import { useAppStore } from '@/store/useStore';

export default function NodeInspector() {
    const closeInspector = useAppStore((s) => s.CloseNodeInspector);
    return (
        <Card size="sm" className="p-0 rounded-sm">
            <CardContent className={`p-0`}>
                <Collapsible className={`p-0`}>
                    <CollapsibleTrigger
                        className={`group flex justify-between items-center w-full p-2 text-background font-bold tracking-wide text-lg text-start bg-primary`}
                    >
                        Node Inspector
                        <ChevronDown className="group-data-[panel-open]:rotate-180 transition-all duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className={`p-2`}>
                        <Badge className="block ml-auto mb-2" variant={`health`}>
                            active
                        </Badge>
                        <Tabs>
                            <TabsList className={`flex w-full`}>
                                <TabsTrigger value={`config`}>Config</TabsTrigger>
                                <TabsTrigger value={`runtime`}>Runtime</TabsTrigger>
                            </TabsList>
                            <TabsContent value={`config`}>
                                <div className="p-2 mb-2">
                                    <ConfigTab />
                                </div>
                                <Button className={`w-full mb-1`}>
                                    <Save /> Save Changes
                                </Button>
                                <Button onClick={closeInspector} className={`w-full`}>
                                    <Power /> Close
                                </Button>
                            </TabsContent>
                            <TabsContent value={`runtime`}></TabsContent>
                        </Tabs>
                    </CollapsibleContent>
                </Collapsible>
            </CardContent>
        </Card>
    );
}
