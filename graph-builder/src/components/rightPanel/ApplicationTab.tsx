import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import AppList from './AppList';
import { useAppStore } from '@/store/useStore';
import debounce from 'lodash.debounce';
import { useMemo } from 'react';

export default function ApplicationTab() {
    const searchString = useAppStore((s) => s.searchString);
    const setSearchString = useAppStore((s) => s.setSearchString);
    const debouncedSetSearch = useMemo(
        () =>
            debounce((value) => {
                setSearchString(value);
            }, 300),
        [] // Empty array ensures this is created only once
    );
    console.log(searchString);
    return (
        <Card size="sm" className="p-0 rounded-sm">
            <CardContent className={`p-0`}>
                <Collapsible className={`p-0`}>
                    <CollapsibleTrigger
                        className={`group flex justify-between items-center w-full p-2 text-background font-bold tracking-wide text-lg text-start bg-primary`}
                    >
                        Applications
                        <ChevronDown className="group-data-[panel-open]:rotate-180 transition-all duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className={`p-2`}>
                        <div className="flex items-center gap-2 mb-2">
                            <Input
                                onChange={(e) => debouncedSetSearch(e.target.value)}
                                placeholder="Search..."
                            />
                            <Button className={`cursor-pointer`}>
                                <Plus className="h-6 w-6" />
                            </Button>
                        </div>
                        <ScrollArea className={`h-50 w-full`}>
                            <ul className="pl-2 pr-3 h-30">
                                <AppList />
                            </ul>
                        </ScrollArea>
                    </CollapsibleContent>
                </Collapsible>
            </CardContent>
        </Card>
    );
}
